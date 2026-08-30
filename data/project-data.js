/**
 * Tana River Bridge Project - Data File
 * This file contains all the project data used by the dashboard.
 * Update this file when new progress data is available.
 */

window.PROJECT_DATA = {

    // ============================================================
    // PROJECT OVERVIEW
    // ============================================================
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
        status: 'ON-TRACK' // CRITICAL | WARNING | ON-TRACK
    },

    // ============================================================
    // KPI CARDS
    // ============================================================
    kpis: [
        { label: 'Overall Progress', value: '82.6%', sub: 'Physical Progress', type: 'warning' },
        { label: 'Time Elapsed', value: '98.6%', sub: '906/919 days', type: 'critical' },
        { label: 'Days to Completion', value: '13', sub: 'As of 31 July 2026', type: 'critical' },
        { label: 'Amount Certified', value: 'KShs 1.15B', sub: '52.9% of contract', type: 'info' },
        { label: 'Contract Sum', value: 'KShs 2.17B', sub: 'Revised', type: 'info' },
        { label: 'Workforce', value: '93% Male', sub: '7% Female', type: 'critical' }
    ],

    // ============================================================
    // WORK PACKAGES
    // ============================================================
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

    // ============================================================
    // EQUIPMENT MOBILIZATION
    // ============================================================
    equipment: [
        { name: 'Asphalt Concrete Batching Plant', required: 1, mobilized: 0, status: 'critical' },
        { name: 'Asphalt Concrete Paver', required: 1, mobilized: 0, status: 'critical' },
        { name: 'Bitumen Pressure Distributor', required: 1, mobilized: 0, status: 'critical' },
        { name: 'Pneumatic Rubber Tyre Roller', required: 1, mobilized: 0, status: 'critical' },
        { name: 'Double Drum Steel Roller', required: 1, mobilized: 0, status: 'critical' },
        { name: 'Chip Spreader', required: 1, mobilized: 0, status: 'critical' },
        { name: 'GCS Pug Mill', required: 2, mobilized: 2, status: 'complete' },
        { name: 'Pulvimixers', required: 2, mobilized: 2, status: 'complete' },
        { name: 'Motor Grader', required: 2, mobilized: 2, status: 'complete' },
        { name: 'Excavators', required: 3, mobilized: 1, status: 'warning' },
        { name: 'Wheel Loaders', required: 2, mobilized: 1, status: 'warning' },
        { name: 'Water Bowser', required: 2, mobilized: 3, status: 'complete' }
    ],

    // ============================================================
    // CRITICAL PATH
    // ============================================================
    criticalPath: [
        { name: 'Subbase (31%)', status: 'active' },
        { name: 'Base (5%)', status: 'blocked' },
        { name: 'Asphalt (0%)', status: 'blocked' },
        { name: 'Surface Dressing (0%)', status: 'blocked' },
        { name: 'Completion (13 Aug)', status: 'blocked' }
    ],

    // ============================================================
    // FINANCIAL DASHBOARD
    // ============================================================
    financial: [
        { label: 'Original Contract Sum', value: 'KShs 1.774B' },
        { label: 'Revised Contract Sum', value: 'KShs 2.171B' },
        { label: 'Variation Amount', value: 'KShs 395.9M' },
        { label: 'Amount Certified', value: 'KShs 1.149B' },
        { label: 'Amount Paid', value: 'KShs 1.147B' },
        { label: 'Outstanding Balance', value: 'KShs 1.022B' }
    ],

    // ============================================================
    // CONTRACTOR PAYMENT STATUS
    // ============================================================
    payments: [
        { ipc: 'IPC 1-11', status: 'paid', amount: '969,869,727.50', date: 'Various' },
        { ipc: 'IPC 12', status: 'not paid', amount: '103,656,075.78', date: '—' },
        { ipc: 'IPC 13', status: 'under review', amount: '—', date: '—' }
    ],

    // ============================================================
    // CONSULTANT PAYMENT SUMMARY
    // ============================================================
    consultant: {
        totalInvoices: 15,
        certifiedAmount: '114,981,978.38',
        paidAmount: '106,818,471.18'
    },

    // ============================================================
    // ENVIRONMENTAL COMPLIANCE
    // ============================================================
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

    // ============================================================
    // RISK REGISTER
    // ============================================================
    risks: [
        { name: 'Flooding', score: 4.0, status: 'mitigated' },
        { name: 'Equipment Not Mobilized', score: 5.0, status: 'active' },
        { name: 'Expired Permits', score: 4.5, status: 'active' },
        { name: 'Appraisal No. 2 Delay', score: 5.0, status: 'active' },
        { name: 'August 13 Deadline', score: 5.0, status: 'active' },
        { name: 'Security/Community', score: 2.0, status: 'mitigated' }
    ],

    // ============================================================
    // ACTION TRACKER
    // ============================================================
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

    // ============================================================
    // WORKFORCE & GENDER
    // ============================================================
    gender: {
        contractor: { male: 93, female: 7, target: 30 },
        consultantSkilled: { male: 84, female: 16, target: 30 },
        consultantUnskilled: { male: 34, female: 66, target: 30 }
    },

    // ============================================================
    // HEALTH & SAFETY
    // ============================================================
    safety: {
        julyIncidents: 0,
        ytdIncidents: 3,
        fatalities: 0,
        ppeCompliance: '✅ Compliant'
    },

    // ============================================================
    // CAMPAIGN STATS
    // ============================================================
    campaign: {
        hivTestKits: 300,
        condomsDistributed: 4320,
        roadSafetyPosters: 100,
        reflectiveJackets: 100
    }

};