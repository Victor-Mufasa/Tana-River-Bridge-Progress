/**
 * Admin Page - Update project data
 */

(function() {
    'use strict';

    // ============================================================
    // DOM REFS
    // ============================================================
    const form = document.getElementById('updateForm');
    const statusDiv = document.getElementById('updateStatus');
    const overallProgress = document.getElementById('overallProgress');
    const daysToCompletion = document.getElementById('daysToCompletion');
    const projectStatus = document.getElementById('projectStatus');
    const wpContainer = document.getElementById('workPackageUpdateContainer');
    const eqContainer = document.getElementById('equipmentUpdateContainer');
    const addActionForm = document.getElementById('addActionForm');

    // ============================================================
    // LOAD CURRENT DATA
    // ============================================================
    function loadCurrentData() {
        const data = window.getData ? window.getData() : window.PROJECT_DATA;
        if (!data) return;

        // Overall
        if (overallProgress) overallProgress.value = data.project.overallProgress;
        if (daysToCompletion) daysToCompletion.value = data.project.daysToCompletion;
        if (projectStatus) projectStatus.value = data.project.status;

        // Work Packages
        if (wpContainer) {
            wpContainer.innerHTML = data.workPackages.map(wp => `
                <div class="update-item" data-name="${wp.name}">
                    <span class="item-name">${wp.name}</span>
                    <span class="current-value">Current: ${wp.progress}%</span>
                    <div class="item-controls">
                        <input type="number" class="wp-progress" min="0" max="100" value="${wp.progress}" />
                        <select class="wp-status">
                            <option value="complete" ${wp.status === 'complete' ? 'selected' : ''}>✅ Complete</option>
                            <option value="warning" ${wp.status === 'warning' ? 'selected' : ''}>🟡 Warning</option>
                            <option value="critical" ${wp.status === 'critical' ? 'selected' : ''}>🔴 Critical</option>
                        </select>
                        <button class="btn btn-success btn-sm wp-update">Update</button>
                    </div>
                </div>
            `).join('');

            // Attach update events to work package buttons
            wpContainer.querySelectorAll('.wp-update').forEach(btn => {
                btn.addEventListener('click', function() {
                    const item = this.closest('.update-item');
                    const name = item.dataset.name;
                    const progress = parseFloat(item.querySelector('.wp-progress').value);
                    const status = item.querySelector('.wp-status').value;
                    updateWorkPackage(name, progress, status);
                });
            });
        }

        // Equipment
        if (eqContainer) {
            eqContainer.innerHTML = data.equipment.map(eq => `
                <div class="update-item" data-name="${eq.name}">
                    <span class="item-name">${eq.name}</span>
                    <span class="current-value">${eq.mobilized}/${eq.required}</span>
                    <div class="item-controls">
                        <input type="number" class="eq-mobilized" min="0" max="${eq.required * 2}" value="${eq.mobilized}" />
                        <span style="font-size:13px;color:var(--text-muted);">/ ${eq.required}</span>
                        <select class="eq-status">
                            <option value="complete" ${eq.status === 'complete' ? 'selected' : ''}>✅ Complete</option>
                            <option value="warning" ${eq.status === 'warning' ? 'selected' : ''}>🟡 Warning</option>
                            <option value="critical" ${eq.status === 'critical' ? 'selected' : ''}>🔴 Critical</option>
                        </select>
                        <button class="btn btn-success btn-sm eq-update">Update</button>
                    </div>
                </div>
            `).join('');

            // Attach update events to equipment buttons
            eqContainer.querySelectorAll('.eq-update').forEach(btn => {
                btn.addEventListener('click', function() {
                    const item = this.closest('.update-item');
                    const name = item.dataset.name;
                    const mobilized = parseInt(item.querySelector('.eq-mobilized').value);
                    const status = item.querySelector('.eq-status').value;
                    updateEquipment(name, mobilized, status);
                });
            });
        }
    }

    // ============================================================
    // UPDATE FUNCTIONS
    // ============================================================
    function updateWorkPackage(name, progress, status) {
        const data = window.getData ? window.getData() : window.PROJECT_DATA;
        const wp = data.workPackages.find(w => w.name === name);
        if (wp) {
            wp.progress = progress;
            wp.status = status;
            // Recalculate overall progress
            recalculateOverallProgress(data);
            window.updateData(data);
            showStatus('success', `✅ Updated "${name}" to ${progress}% (${status})`);
            loadCurrentData(); // Refresh form
        }
    }

    function updateEquipment(name, mobilized, status) {
        const data = window.getData ? window.getData() : window.PROJECT_DATA;
        const eq = data.equipment.find(e => e.name === name);
        if (eq) {
            eq.mobilized = mobilized;
            eq.status = status;
            window.updateData(data);
            showStatus('success', `✅ Updated "${name}" to ${mobilized} units (${status})`);
            loadCurrentData();
        }
    }

    function recalculateOverallProgress(data) {
        // Simple average of all work packages
        const total = data.workPackages.reduce((sum, wp) => sum + wp.progress, 0);
        const avg = total / data.workPackages.length;
        data.project.overallProgress = Math.round(avg * 100) / 100;

        // Update status based on progress
        if (data.project.overallProgress >= 90) {
            data.project.status = 'ON-TRACK';
        } else if (data.project.overallProgress >= 70) {
            data.project.status = 'WARNING';
        } else {
            data.project.status = 'CRITICAL';
        }
    }

    // ============================================================
    // FORM SUBMISSION - Overall Status
    // ============================================================
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            const data = window.getData ? window.getData() : window.PROJECT_DATA;
            data.project.overallProgress = parseFloat(overallProgress.value);
            data.project.daysToCompletion = parseInt(daysToCompletion.value);
            data.project.status = projectStatus.value;

            window.updateData(data);
            showStatus('success', '✅ Overall project status updated successfully!');
            loadCurrentData();
        });
    }

    // ============================================================
    // ADD ACTION
    // ============================================================
    if (addActionForm) {
        addActionForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const priority = document.getElementById('actionPriority').value;
            const action = document.getElementById('actionDescription').value.trim();
            const status = document.getElementById('actionStatus').value;

            if (!action) {
                showStatus('error', '❌ Please enter an action description.');
                return;
            }

            const data = window.getData ? window.getData() : window.PROJECT_DATA;
            data.actions.unshift({ priority, action, status });

            window.updateData(data);
            showStatus('success', '✅ New action added successfully!');
            document.getElementById('actionDescription').value = '';
            loadCurrentData();
        });
    }

    // ============================================================
    // EXPORT / IMPORT
    // ============================================================
    window.exportData = function() {
        const data = window.getData ? window.getData() : window.PROJECT_DATA;
        const json = JSON.stringify(data, null, 2);
        const blob = new Blob([json], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `tana-bridge-data-${new Date().toISOString().split('T')[0]}.json`;
        a.click();
        URL.revokeObjectURL(url);
        showStatus('success', '✅ Data exported successfully!');
    };

    window.importData = function() {
        const input = document.getElementById('importFile');
        if (!input.files || !input.files[0]) {
            showStatus('error', '❌ Please select a JSON file to import.');
            return;
        }

        const reader = new FileReader();
        reader.onload = function(e) {
            try {
                const data = JSON.parse(e.target.result);
                window.updateData(data);
                showStatus('success', '✅ Data imported successfully!');
                loadCurrentData();
            } catch (err) {
                showStatus('error', '❌ Invalid JSON file: ' + err.message);
            }
        };
        reader.readAsText(input.files[0]);
    };

    // ============================================================
    // STATUS MESSAGE
    // ============================================================
    function showStatus(type, message) {
        if (!statusDiv) return;
        statusDiv.style.display = 'block';
        statusDiv.className = `alert-box ${type === 'success' ? 'success' : 'danger'}`;
        statusDiv.innerHTML = `<i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i> ${message}`;

        // Auto-hide after 5 seconds
        clearTimeout(window._statusTimeout);
        window._statusTimeout = setTimeout(() => {
            statusDiv.style.display = 'none';
        }, 5000);
    }

    // ============================================================
    // CHECK URL PARAMS FOR SECTION
    // ============================================================
    function checkUrlParams() {
        const params = new URLSearchParams(window.location.search);
        const section = params.get('section');
        if (section) {
            // Scroll to relevant section
            const targets = {
                'progress': 'workPackageUpdateContainer',
                'financial': 'updateForm',
                'environmental': 'envBody',
                'risks': 'riskBody'
            };
            const targetId = targets[section];
            if (targetId) {
                const el = document.getElementById(targetId);
                if (el) {
                    setTimeout(() => {
                        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }, 300);
                }
            }
        }
    }

    // ============================================================
    // INIT
    // ============================================================
    loadCurrentData();
    checkUrlParams();

    // Listen for data updates
    document.addEventListener('dataUpdated', function() {
        loadCurrentData();
    });

})();