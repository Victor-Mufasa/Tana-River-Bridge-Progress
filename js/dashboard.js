/**
 * Tana River Bridge Project Dashboard
 * Main JavaScript file - renders all dashboard components
 */

(function() {
    'use strict';

    // ============================================================
    // DATA (fallback)
    // ============================================================
    const DEFAULT_DATA = {
        project: {
            name: 'New Tana River Bridge',
            contractNo: 'KeNHA/RD/HDS/4011/2023',
            reportNo: '30',
            reportMonth: 'July 2026',
            reportDate: '2026-08-07',
            overallProgress: 82.60,
            timeElapsed: 98.59,
            daysElapsed: 906,
            totalDays: 919,
            revisedCompletion: '2026-08-13',
            daysToCompletion: 13,
            status: 'CRITICAL'
        },
        kpis: [
            { label: 'Overall Progress', value: '82.6%', sub: 'Physical Progress', type: 'warning' },
            { label: 'Time Elapsed', value: '98.6%', sub: '906/919 days', type: 'critical' },
            { label: 'Days to Completion', value: '13', sub: 'As of 31 July 2026', type: 'critical' },
            { label: 'Amount Certified', value: 'KShs 1.15B', sub: '52.9% of contract', type: 'info' },
            { label: 'Contract Sum', value: 'KShs 2.17B', sub: 'Revised', type: 'info' },
            { label: 'Workforce', value: '93% Male', sub: '7% Female', type: 'critical' }
        ],
        workPackages: [
            { name: 'Bridge Substructure', progress: 100, status: 'complete' },
            { name: 'Bridge Girders (30 No.)', progress: 100, status: 'complete' },
            { name: 'Bridge Superstructure', progress: 100, status: 'complete' },
            { name: 'Approach Slabs (Bridge)', progress: 100, status: 'complete' },
            { name: 'Box Culverts (5 No.)', progress: 100, status: 'complete' },
            { name: 'Retaining Wall', progress: 100, status: 'complete' },
            { name: 'Gabion Protection', progress: 100, status: 'complete' },
            { name: 'Subgrade I Layer', progress: 100, status: 'complete' },
            { name: 'Subgrade II Layer', progress: 95.7, status: 'warning' },
            { name: 'Subbase Layer', progress: 31.2, status: 'critical' },
            { name: 'Base Layer', progress: 5, status: 'critical' },
            { name: 'Asphalt Concrete', progress: 0, status: 'critical' },
            { name: 'Surface Dressing', progress: 0, status: 'critical' },
            { name: 'Slope Protection Wall', progress: 32, status: 'warning' }
        ],
        equipment: [
            { name: 'Asphalt Concrete Batching Plant', required: 1, mobilized: 0, status: 'critical' },
            { name: 'Asphalt Concrete Paver', required: 1, mobilized: 0, status: 'critical' },
            { name: 'Bitumen Pressure Distributor', required: 1, mobilized: 0, status: 'critical' },
            { name: 'Pneumatic Rubber Tyre Roller', required: 1, mobilized: 0, status: 'critical' },
            { name: 'Double Drum Steel Roller', required: 1, mobilized: 0, status: 'critical' },
            { name: 'Chip Spreader', required: 1, mobilized: 0, status: 'critical' },
            { name: 'GCS Pug Mill', required: 2, mobilized: 2, status: 'complete' },
            { name: 'Pulvimixers', required: 2, mobilized: 2, status: 'complete' },
            { name: 'Motor Grader', required: 2, mobilized: 2, status: 'complete' }
        ],
        criticalPath: [
            { name: 'Subbase (31%)', status: 'active' },
            { name: 'Base (5%)', status: 'blocked' },
            { name: 'Asphalt (0%)', status: 'blocked' },
            { name: 'Surface Dressing (0%)', status: 'blocked' },
            { name: 'Completion (13 Aug)', status: 'blocked' }
        ],
        financial: [
            { label: 'Original Contract Sum', value: 'KShs 1.774B' },
            { label: 'Revised Contract Sum', value: 'KShs 2.171B' },
            { label: 'Variation Amount', value: 'KShs 395.9M' },
            { label: 'Amount Certified', value: 'KShs 1.149B' },
            { label: 'Amount Paid', value: 'KShs 1.147B' },
            { label: 'Outstanding Balance', value: 'KShs 1.022B' }
        ],
        payments: [
            { ipc: 'IPC 1-11', status: 'paid', amount: '969,869,727.50', date: 'Various' },
            { ipc: 'IPC 12', status: 'not paid', amount: '103,656,075.78', date: '—' },
            { ipc: 'IPC 13', status: 'under review', amount: '—', date: '—' }
        ],
        consultant: {
            totalInvoices: 15,
            certifiedAmount: '114,981,978.38',
            paidAmount: '106,818,471.18'
        },
        environmental: [
            { name: 'Project EIA License', status: 'compliant', validity: 'Valid to 21/8/2026' },
            { name: 'EIA Variation License', status: 'compliant', validity: 'Valid to 21/8/2026' },
            { name: 'Garissa Campsite EIA', status: 'critical', validity: 'Expired 20/5/2026' },
            { name: 'WRA Permit (Water Draw)', status: 'critical', validity: 'Not Obtained' },
            { name: 'WRA Permit (River Works)', status: 'critical', validity: 'Expired 12/7/2025' },
            { name: "RE's Office (DOSH)", status: 'compliant', validity: 'Valid to 8/9/2026' },
            { name: 'Garissa Campsite (DOSH)', status: 'compliant', validity: 'Valid to 8/9/2026' },
            { name: 'Batching Plant (DOSH)', status: 'critical', validity: 'Expired 8/9/2025' },
            { name: 'Bridge (DOSH)', status: 'compliant', validity: 'Valid to 16/1/2027' },
            { name: 'KFS No Objection Permit', status: 'compliant', validity: 'Valid to 13/8/2026' },
            { name: 'CESMP', status: 'critical', validity: 'Not Done' },
            { name: 'Waste Management Plan', status: 'critical', validity: 'Not Done' }
        ],
        risks: [
            { name: 'Flooding', score: 4.0, status: 'mitigated' },
            { name: 'Equipment Not Mobilized', score: 5.0, status: 'active' },
            { name: 'Expired Permits', score: 4.5, status: 'active' },
            { name: 'Appraisal No. 2 Delay', score: 5.0, status: 'active' },
            { name: 'August 13 Deadline', score: 5.0, status: 'active' },
            { name: 'Security/Community', score: 2.0, status: 'mitigated' }
        ],
        actions: [
            { priority: 'critical', action: 'Mobilize Asphalt Plant, Paver, and all related equipment', status: 'pending' },
            { priority: 'critical', action: 'Expedite Appraisal No. 2 approval', status: 'pending' },
            { priority: 'critical', action: 'Update Cash Flow Projection', status: 'pending' },
            { priority: 'critical', action: 'Renew Garissa Campsite EIA License', status: 'pending' },
            { priority: 'critical', action: 'Obtain WRA Permits (Water Draw & River Works)', status: 'pending' },
            { priority: 'critical', action: 'Submit CESMP and Waste Management Plan', status: 'pending' },
            { priority: 'high', action: 'Develop Gender Action Plan', status: 'pending' },
            { priority: 'high', action: 'Conduct Schedule Risk Analysis', status: 'pending' },
            { priority: 'medium', action: 'Expand Risk Register for DLP', status: 'pending' }
        ],
        gender: {
            contractor: { male: 93, female: 7, target: 30 },
            consultantSkilled: { male: 84, female: 16, target: 30 },
            consultantUnskilled: { male: 34, female: 66, target: 30 }
        },
        safety: {
            julyIncidents: 0,
            ytdIncidents: 3,
            fatalities: 0,
            ppeCompliance: '✅ Compliant'
        },
        campaign: {
            hivTestKits: 300,
            condomsDistributed: 4320,
            roadSafetyPosters: 100,
            reflectiveJackets: 100
        }
    };

    // ============================================================
    // DOM HELPERS
    // ============================================================
    function $(sel, ctx) { return (ctx || document).querySelector(sel); }

    function $$(sel, ctx) { return Array.from((ctx || document).querySelectorAll(sel)); }

    // ============================================================
    // STATUS HELPERS
    // ============================================================
    function getStatusClass(status) {
        const map = {
            'complete': 'green',
            'compliant': 'green',
            'warning': 'yellow',
            'critical': 'red',
            'active': 'red',
            'mitigated': 'green',
            'paid': 'green',
            'not paid': 'red',
            'under review': 'yellow',
            'pending': 'yellow',
            'in-progress': 'yellow',
            'completed': 'green'
        };
        return map[status.toLowerCase()] || 'gray';
    }

    function getStatusDot(status) {
        const cls = getStatusClass(status);
        return `<span class="status-dot-sm ${cls}"></span>`;
    }

    function getProgressBar(progress) {
        let color = 'green';
        if (progress < 30) color = 'red';
        else if (progress < 70) color = 'yellow';
        return `<div class="progress-bar-sm"><div class="fill ${color}" style="width:${progress}%;"></div></div> ${progress}%`;
    }

    function getPriorityBadge(priority) {
        const labels = {
            'critical': '🔴 Critical',
            'high': '🟡 High',
            'medium': '🔵 Medium',
            'low': '🟢 Low'
        };
        return `<span class="priority ${priority}">${labels[priority] || priority}</span>`;
    }

    // ============================================================
    // RENDER FUNCTIONS
    // ============================================================

    // 1. KPI Cards
    function renderKPIs(data) {
        const grid = document.getElementById('kpiGrid');
        if (!grid) return;
        grid.innerHTML = data.kpis.map(kpi => `
            <div class="kpi-card ${kpi.type || 'info'}">
                <div class="kpi-label">${kpi.label}</div>
                <div class="kpi-value">${kpi.value}</div>
                <div class="kpi-sub">${kpi.sub}</div>
            </div>
        `).join('');
    }

    // 2. Work Package Table
    function renderWorkPackages(data) {
        const tbody = document.getElementById('workPackageBody');
        if (!tbody) return;
        tbody.innerHTML = data.workPackages.map(wp => `
            <tr>
                <td>${wp.name}</td>
                <td style="text-align:center;">${getProgressBar(wp.progress)}</td>
                <td style="text-align:center;">
                    <span class="status-indicator">
                        ${getStatusDot(wp.status)}
                        ${wp.status.charAt(0).toUpperCase() + wp.status.slice(1)}
                    </span>
                </td>
            </tr>
        `).join('');
    }

    // 3. Equipment Table
    function renderEquipment(data) {
        const tbody = document.getElementById('equipmentBody');
        if (!tbody) return;
        tbody.innerHTML = data.equipment.map(eq => `
            <tr>
                <td>${eq.name}</td>
                <td style="text-align:center;">${eq.required}</td>
                <td style="text-align:center;">${eq.mobilized}</td>
                <td style="text-align:center;">
                    <span class="status-indicator">
                        ${getStatusDot(eq.status)}
                        ${eq.status.charAt(0).toUpperCase() + eq.status.slice(1)}
                    </span>
                </td>
            </tr>
        `).join('');
    }

    // 4. Critical Path
    function renderCriticalPath(data) {
        const container = document.getElementById('criticalPath');
        if (!container) return;
        const steps = data.criticalPath;
        container.innerHTML = steps.map((step, i) => {
            const cls = step.status === 'done' ? 'done' : step.status === 'active' ? 'active' : 'blocked';
            const icon = step.status === 'done' ? '✅' : step.status === 'active' ? '⏳' : '🔴';
            return `
                <span class="step ${cls}">${icon} ${step.name}</span>
                ${i < steps.length - 1 ? '<span class="arrow">→</span>' : ''}
            `;
        }).join('');
    }

    // 5. Financial Grid
    function renderFinancial(data) {
        const grid = document.getElementById('financialGrid');
        if (!grid) return;
        grid.innerHTML = data.financial.map(item => `
            <div class="financial-item">
                <div class="label">${item.label}</div>
                <div class="value">${item.value}</div>
            </div>
        `).join('');
    }

    // 6. Payment Status
    function renderPayments(data) {
        const tbody = document.getElementById('paymentStatusBody');
        if (!tbody) return;
        tbody.innerHTML = data.payments.map(p => `
            <tr>
                <td><strong>${p.ipc}</strong></td>
                <td style="text-align:center;">
                    <span class="status-indicator">
                        ${getStatusDot(p.status)}
                        ${p.status.charAt(0).toUpperCase() + p.status.slice(1)}
                    </span>
                </td>
                <td style="text-align:right;">KES ${p.amount}</td>
                <td style="text-align:center;font-size:12px;color:var(--text-muted);">${p.date || '—'}</td>
            </tr>
        `).join('');
    }

    // 7. Consultant Summary
    function renderConsultant(data) {
        const container = document.getElementById('consultantSummary');
        if (!container) return;
        const c = data.consultant;
        container.innerHTML = `
            <div class="item">
                <div class="label">Total Invoices</div>
                <div class="value">${c.totalInvoices}</div>
            </div>
            <div class="item">
                <div class="label">Certified Amount</div>
                <div class="value">KES ${c.certifiedAmount}</div>
            </div>
            <div class="item">
                <div class="label">Paid Amount</div>
                <div class="value">KES ${c.paidAmount}</div>
            </div>
        `;
    }

    // 8. Environmental Compliance
    function renderEnvironmental(data) {
        const tbody = document.getElementById('envBody');
        if (!tbody) return;
        tbody.innerHTML = data.environmental.map(env => {
            const statusLabel = env.status === 'compliant' ? '✅ Compliant' :
                env.status === 'critical' ? '🔴 Action Needed' :
                env.status.charAt(0).toUpperCase() + env.status.slice(1);
            return `
                <tr>
                    <td>${env.name}</td>
                    <td style="text-align:center;">
                        <span class="status-indicator">
                            ${getStatusDot(env.status)}
                            ${statusLabel}
                        </span>
                    </td>
                    <td style="text-align:center;font-size:12px;color:var(--text-muted);">${env.validity}</td>
                </tr>
            `;
        }).join('');
    }

    // 9. Risk Register
    function renderRisks(data) {
        const tbody = document.getElementById('riskBody');
        if (!tbody) return;
        tbody.innerHTML = data.risks.map(r => `
            <tr>
                <td>${r.name}</td>
                <td style="text-align:center;font-weight:700;">${r.score.toFixed(1)}</td>
                <td style="text-align:center;">
                    <span class="status-indicator">
                        ${getStatusDot(r.status)}
                        ${r.status === 'mitigated' ? '✅ Mitigated' : '🔴 Active'}
                    </span>
                </td>
            </tr>
        `).join('');
    }

    // 10. Action Tracker
    function renderActions(data) {
        const tbody = document.getElementById('actionBody');
        if (!tbody) return;
        tbody.innerHTML = data.actions.map(a => `
            <tr>
                <td>${getPriorityBadge(a.priority)}</td>
                <td style="font-size:13px;">${a.action}</td>
                <td style="text-align:center;">
                    <span class="status-indicator">
                        ${getStatusDot(a.status)}
                        ${a.status.charAt(0).toUpperCase() + a.status.slice(1).replace('-', ' ')}
                    </span>
                </td>
            </tr>
        `).join('');
    }

    // 11. Gender Grid
    function renderGender(data) {
        const grid = document.getElementById('genderGrid');
        if (!grid) return;
        const g = data.gender;
        grid.innerHTML = `
            <div class="gender-item">
                <div class="label">Contractor</div>
                <div class="value" style="color:var(--primary);">${g.contractor.male}%</div>
                <div class="sub">Male · ${g.contractor.female}% Female</div>
                <div style="font-size:11px;color:var(--danger);margin-top:2px;">Target: 30% Female</div>
            </div>
            <div class="gender-item">
                <div class="label">Consultant (Skilled)</div>
                <div class="value" style="color:var(--primary);">${g.consultantSkilled.male}%</div>
                <div class="sub">Male · ${g.consultantSkilled.female}% Female</div>
                <div style="font-size:11px;color:var(--warning);margin-top:2px;">Target: 30% Female</div>
            </div>
            <div class="gender-item">
                <div class="label">Consultant (Unskilled)</div>
                <div class="value" style="color:var(--success);">${g.consultantUnskilled.female}%</div>
                <div class="sub">Female · ${g.consultantUnskilled.male}% Male</div>
                <div style="font-size:11px;color:var(--success);margin-top:2px;">✅ Exceeds target</div>
            </div>
        `;
    }

    // 12. Safety Grid
    function renderSafety(data) {
        const grid = document.getElementById('safetyGrid');
        if (!grid) return;
        const s = data.safety;
        grid.innerHTML = `
            <div class="safety-item">
                <div class="label">July Incidents</div>
                <div class="value" style="color:var(--success);">${s.julyIncidents}</div>
                <div class="sub">Project-related</div>
            </div>
            <div class="safety-item">
                <div class="label">YTD Incidents</div>
                <div class="value" style="color:var(--warning);">${s.ytdIncidents}</div>
                <div class="sub">Jan–June 2026</div>
            </div>
            <div class="safety-item">
                <div class="label">PPE Compliance</div>
                <div class="value" style="font-size:20px;">${s.ppeCompliance}</div>
                <div class="sub">Task-specific PPE issued</div>
            </div>
        `;
    }

    // 13. Campaign Stats
    function renderCampaign(data) {
        const container = document.getElementById('campaignStats');
        if (!container) return;
        const c = data.campaign || { hivTestKits: 300, condomsDistributed: 4320, roadSafetyPosters: 100, reflectiveJackets: 100 };
        container.innerHTML = `
            <div class="campaign-stat">
                <div class="label">HIV Self-Test Kits</div>
                <div class="value">${c.hivTestKits}</div>
                <div class="sub">Distributed</div>
            </div>
            <div class="campaign-stat">
                <div class="label">Condoms</div>
                <div class="value">${c.condomsDistributed.toLocaleString()}</div>
                <div class="sub">Distributed</div>
            </div>
            <div class="campaign-stat">
                <div class="label">Road Safety Posters</div>
                <div class="value">${c.roadSafetyPosters}</div>
                <div class="sub">Distributed</div>
            </div>
            <div class="campaign-stat">
                <div class="label">Reflective Jackets</div>
                <div class="value">${c.reflectiveJackets}</div>
                <div class="sub">Issued</div>
            </div>
        `;
    }

    // 14. Quick Stats (for overview page)
    function renderQuickStats(data) {
        const container = document.getElementById('quickStats');
        if (!container) return;
        const wp = data.workPackages;
        const complete = wp.filter(w => w.status === 'complete').length;
        const warning = wp.filter(w => w.status === 'warning').length;
        const critical = wp.filter(w => w.status === 'critical').length;

        container.innerHTML = `
            <div class="quick-stat">
                <span class="stat-label">✅ Complete</span>
                <span class="stat-value">${complete}</span>
            </div>
            <div class="quick-stat">
                <span class="stat-label">🟡 In Progress</span>
                <span class="stat-value">${warning}</span>
            </div>
            <div class="quick-stat">
                <span class="stat-label">🔴 Critical</span>
                <span class="stat-value">${critical}</span>
            </div>
            <div class="quick-stat">
                <span class="stat-label">📦 Total Packages</span>
                <span class="stat-value">${wp.length}</span>
            </div>
        `;
    }

    // 15. Top Risks (for overview page)
    function renderTopRisks(data) {
        const container = document.getElementById('topRisks');
        if (!container) return;
        const top = data.risks.filter(r => r.status === 'active').sort((a, b) => b.score - a.score);
        container.innerHTML = top.map(r => `
            <div class="top-risk">
                <span class="risk-name">${r.name}</span>
                <span class="risk-status" style="color:var(--danger);">Score: ${r.score.toFixed(1)}</span>
            </div>
        `).join('');
    }

    // 16. Progress Ring (Chart.js)
    function renderProgressRing(data) {
        const canvas = document.getElementById('progressRing');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        const progress = data.project.overallProgress;

        // Update text label
        const label = document.querySelector('.progress-ring-label .big');
        if (label) label.textContent = `${progress}%`;

        // Update badge
        const badge = document.getElementById('progressBadge');
        if (badge) badge.textContent = `${progress}% Complete`;

        // Update time elapsed
        const timeEl = document.getElementById('timeElapsed');
        if (timeEl) timeEl.textContent = `${data.project.timeElapsed}%`;

        // Update days to completion
        const daysEl = document.getElementById('daysToCompletion');
        if (daysEl) daysEl.textContent = data.project.daysToCompletion;

        // Chart
        if (typeof Chart !== 'undefined') {
            // Destroy existing chart if any
            if (window._progressChart) {
                window._progressChart.destroy();
            }
            window._progressChart = new Chart(ctx, {
                type: 'doughnut',
                data: {
                    datasets: [{
                        data: [progress, 100 - progress],
                        backgroundColor: ['var(--primary)', 'var(--bg-tertiary)'],
                        borderWidth: 0
                    }]
                },
                options: {
                    cutout: '75%',
                    responsive: true,
                    maintainAspectRatio: true,
                    plugins: {
                        legend: { display: false },
                        tooltip: { enabled: false }
                    }
                }
            });
        }
    }

    // 17. Update Overall Status Badge
    function updateStatusBadge(data) {
        const badge = document.getElementById('overallStatus');
        if (!badge) return;
        const status = data.project.status || 'CRITICAL';
        const color = status === 'CRITICAL' ? 'var(--danger)' :
            status === 'WARNING' ? 'var(--warning)' : 'var(--success)';
        badge.innerHTML = `
            <span class="status-dot pulse" style="background:${color};"></span>
            <span class="status-text">${status}</span>
        `;
    }

    // 18. Update Footer Date
    function updateFooterDate(data) {
        const el = document.getElementById('footerDate');
        if (el) el.textContent = data.project.reportDate || '2026-08-07';
    }

    // ============================================================
    // MAIN INIT
    // ============================================================
    function initDashboard(data) {
        const d = data || window.PROJECT_DATA || DEFAULT_DATA;

        renderKPIs(d);
        renderWorkPackages(d);
        renderEquipment(d);
        renderCriticalPath(d);
        renderFinancial(d);
        renderPayments(d);
        renderConsultant(d);
        renderEnvironmental(d);
        renderRisks(d);
        renderActions(d);
        renderGender(d);
        renderSafety(d);
        renderCampaign(d);
        renderQuickStats(d);
        renderTopRisks(d);
        renderProgressRing(d);
        updateStatusBadge(d);
        updateFooterDate(d);

        console.log('✅ Dashboard rendered successfully.');
    }

    // ============================================================
    // EXPOSE FOR ADMIN PAGE
    // ============================================================
    window.getData = function() {
        return window.PROJECT_DATA || DEFAULT_DATA;
    };

    window.updateData = function(newData) {
        window.PROJECT_DATA = newData;
        initDashboard(newData);
        // Dispatch event for admin page
        document.dispatchEvent(new CustomEvent('dataUpdated', { detail: newData }));
    };

    // Run on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            initDashboard(window.PROJECT_DATA);
        });
    } else {
        initDashboard(window.PROJECT_DATA);
    }

})();