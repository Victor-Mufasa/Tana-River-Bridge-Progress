# Tana River Bridge MPR Dashboard

A comprehensive, multi-page dashboard for monitoring the New Tana River Bridge construction project. Built with vanilla HTML, CSS, and JavaScript with light/dark mode support.

## Table of Contents

- [Title](#tana-river-bridge-mpr-dashboard)
- [Overview](#overview)
- [Live Demo](#live-demo)
- [Dashboard Sections](#dashboard-sections)
- [Installation](#installation)
- [Usage Guide](#usage-guide)
- [Pages](#pages)
- [Data Management](#data-management)
- [Theming](#theming)
- [Browser Support](#browser-support)
- [Technologies Used](#technologies-used)
- [Data Source](#data-source)

## Overview

This dashboard visualizes project data from Monthly Progress Report No. 30 (July 2026) for the New Tana River Bridge and Approach Roads project (Contract No. KeNHA/RD/HDS/4011/2023). It provides a clear, interactive interface for monitoring construction progress, financial status, environmental compliance, risks, and action items.

## Live Demo

<https://victor-mufasa.github.io/Tana-River-Bridge-Progress/>

## Features

- 5 Dedicated Pages – Overview, Progress, Financial, Environmental, Risks & Actions

- Light/Dark Mode – Persistent theme preference with smooth transitions

- Real-time Updates – Data updates reflect immediately across all pages

- Responsive Design – Works on desktop, tablet, and mobile devices

- Admin Interface – Update progress data without touching code

- Data Export/Import – Backup and restore data as JSON

## Dashboard Sections

- Overview - KPI cards, progress ring, critical path, quick stats, top risks

- Progress - Work package table with progress bars, equipment mobilization status

- Financial - Contract sums, payment status (IPCs), consultant payments

- Environmental - Permit compliance, gender workforce, health & safety metrics

- Risk & Actions - Risk register with scores, action tracker with priorities

## Installation

1. Clone the repository to your computer:

```bash
git clone https://victor-mufasa.github.io/Tana-River-Bridge-Progress/
```

2. Navigate into the Tana-River-Bridge-Progress folder and open the index.html file in your desired browser

## File Dependencies

All dependencies are loaded via CDN:

- Google Fonts (Inter)

- Font Awesome 6.5.0

- Chart.js 4.4.0

## Usage Guide

### Navigation

Use the sidebar on the left to navigate between pages:

- Overview – Project summary and KPIs

- Progress – Work packages and equipment

- Financial – Contract and payment status

- Environmental – Permits, gender, safety

- Risks & Actions – Risk register and action tracker

### Theme Toggle

Click the moon/sun icon in the top-right corner to switch between light and dark mode. Your preference is saved automatically.

### Updating Data

Method 1: Admin Page (Recommended)
1. Click the "Update" button in the top-right corner of any page

2. On the admin page:

- Update overall progress and status

- Update individual work package progress

- Update equipment mobilization numbers

- Add new action items

- Changes save automatically

2. Method 2: Edit Data File

-  Open data/project-data.js in a text editor

-  Find the section you want to update

- Modify the values

-  Save and refresh the browser

## Pages

### Overview (index.html)

The landing page showing:

- 6 KPI Cards – Overall progress, time elapsed, days to completion, certified amount, contract sum, workforce gender

- Progress Ring – Visual representation of overall progress

- Critical Path – Current status of critical activities

- Quick Stats – Summary of work package statuses

- Top Risks – Highest-priority active risks

### Progress (progress.html)

Detailed view of:

- Work Package Table – All 13 packages with progress bars and status indicators

- Equipment Mobilization – Required vs. mobilized equipment with status

### Financial (financial.html)

Financial overview including:

- Contract Financial Summary – Original/revised sums, variations, certified/paid amounts

- Contractor Payment Status – IPC status with amounts and dates

- Consultant Payments – Invoice summary

### Environmental (environmental.html)

Environmental and social compliance:

- Permits & Licenses – Status and validity of all permits

- Workforce Gender – Gender breakdown by contractor and consultant

- Health & Safety – Incident metrics and PPE compliance

### Risks & Actions (risks-actions.html)

Risk management:

- Risk Register – All risks with scores and status

- Action Tracker – Priority-coded action items with status

### Admin (admin.html)

Update interface:

- Overall project status

- Individual work package progress

- Equipment mobilization counts

- Add new action items

- Export/Import data as JSON

## Data Management

```js
window.PROJECT_DATA = {
    project: {
        overallProgress: 82.60,
        daysToCompletion: 13,
        status: 'CRITICAL'
    },
    workPackages: [
        { name: 'Subbase Layer', progress: 31.2, status: 'critical' }
    ],
    equipment: [
        { name: 'Asphalt Paver', required: 1, mobilized: 0, status: 'critical' }
    ],
    // ... more sections
};
```

### Export/Import

- Export: Click "Export Data" on the admin page to download a JSON file

- Import: Select a JSON file and click "Import Data" to restore or transfer data

## Theming

### Light Mode (Default)

Clean, professional light theme with subtle shadows and blue accents.

### Dark Mode

Reduced eye strain with dark backgrounds and muted colors. Automatically respects system preference on first visit.

### Theme Persistence

- Theme preference is stored in localStorage

- Remembers your choice across sessions

- System preference used on first visit

## Browser Support

- Chrome
- Firefox
- Safari
- Edge
- Opera

Note: The dashboard uses modern CSS features (CSS variables, Grid, Flexbox) and ES6 JavaScript. It works best in modern browsers.

## Technologies Used

- HTML5 – Semantic markup

- CSS3 – Custom properties, Grid, Flexbox, transitions

- JavaScript (ES6) – Vanilla JS, no frameworks

- Chart.js – Doughnut chart for progress ring

- Font Awesome – Icons

- Google Fonts (Inter) – Typography

## Data Source

All data is sourced from:

### Monthly Progress Report No. 30 – July 2026

New Tana River Bridge and Approach Roads
Ukasi – Garissa – Modika (A3) Road
Contract No.: KeNHA/RD/HDS/4011/2023

Prepared by RHINES Engineering Services Ltd in JV with CM Kamau & Associates Ltd in association with BATCH Associates Ltd

### Customization

```css
:root {
    --primary: #1a4b6d;      /* Change to your brand color */
    --primary-dark: #0b2b4a;
}
```

### Adding New Work Packages

Add to the workPackages array in data/project-data.js:

```js
workPackages: [
    // ... existing packages
    { name: 'New Package', progress: 50, status: 'warning' }
]
```

### Adding New Actions

Use the admin page or add directly to the actions array:

```js
actions: [
    // ... existing actions
    { priority: 'high', action: 'New action item', status: 'pending' }
]
```

## License

MIT License

Copyright © 2026 Victor Kipkemboi

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Contact

For any inquiries or ideas feel free to reach out to <victorkipkemboi241@gmail.com>

Dashboard built from Monthly Progress Report No. 30 – July 2026