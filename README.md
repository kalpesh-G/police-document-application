# Police Documents Generator

A comprehensive Flask web application designed for police officers to efficiently generate, manage, and download official case documents. The application supports Gujarati language throughout and provides real-time document preview functionality.

## 📋 Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Data Variables](#data-variables)
- [Offence Sections & Documents](#offence-sections--documents)
- [Adding New Templates](#adding-new-templates)
- [Future Enhancements](#future-enhancements)
- [Database Integration Guide](#database-integration-guide)
- [Deployment](#deployment)
- [Troubleshooting](#troubleshooting)

---

## 🎯 Overview

The Police Documents Generator streamlines the document creation process for law enforcement agencies. Officers enter case and accused information once, and the system automatically generates all required legal documents based on the offence section (IPC/BNS code), with proper placeholder replacement and formatting.

**Key Use Case:**
- Officer enters accused details, case information, and arrest details on the home page
- Selects applicable offence section (e.g., 302, 379, 281)
- System automatically displays all relevant document templates for that section
- Officer reviews documents using live preview
- Downloads individual or merged documents in DOCX or PDF format
- All data persists in browser localStorage for the session

---

## ✨ Features

### Core Functionality
- ✅ **Comprehensive Data Entry Form** - All relevant case and accused details
- ✅ **Gujarati Language Support** - Full UI in Gujarati with English labels
- ✅ **Live Preview** - Real-time preview of form data
- ✅ **Dynamic Document Selection** - Automatically shows documents for selected offence section
- ✅ **Document Preview** - Modal-based preview before download
- ✅ **Merged Preview** - Right-side panel showing all documents merged
- ✅ **Multiple Download Options**:
  - Single document (DOCX)
  - Single document (PDF)
  - All documents as ZIP (separate files)
  - All documents as ZIP (PDF format)
  - Merged into single DOCX
  - Merged into single PDF
- ✅ **Smart Placeholder Replacement** - Handles split runs in Word documents
- ✅ **Missing Field Detection** - Shows only fields required for selected documents
- ✅ **Page Breaks** - Each document starts on new page when merged
- ✅ **Automatic Cleanup** - Generated files auto-delete after download

### Data Persistence
- ✅ **Browser localStorage** - Stores up to 5-10MB of data
- ✅ **Session Synchronization** - Server-side session backup
- ✅ **API Endpoints** - Save/load data via REST API

---

## 🛠️ Technology Stack

| Component | Technology |
|-----------|-----------|
| Backend Framework | Flask (Python) |
| Frontend | HTML5, Bootstrap 5, JavaScript |
| Document Processing | python-docx, docxcompose |
| PDF Generation | docx2pdf (with LibreOffice fallback) |
| Language | Python 3.12+ |
| Deployment | Vercel |
| Data Storage | Browser localStorage + Session |

---

## 📁 Project Structure

```
police_documents_flasks/
│
├── app.py                              # Main Flask application
├── requirements.txt                    # Python dependencies
├── README.md                           # This file
├── vercel.json                         # Vercel deployment config
├── .vercelignore                       # Files to ignore on Vercel
│
├── templates/
│   ├── index.html                      # Home page (data entry form)
│   └── documents.html                  # Documents page (list & preview)
│
├── word_templates/                     # Word document templates
│   ├── 281/
│   │   ├── Arrest_Memo_281.docx
│   │   ├── Bail_Bond_281.docx
│   │   └── Notice_281.docx
│   ├── 302/
│   │   ├── Arrest_Memo_Major.docx
│   │   ├── Remand_Application.docx
│   │   └── Panchnama_Scene.docx
│   ├── 379/
│   │   ├── Arrest_Memo_Theft.docx
│   │   └── Recovery_Panchnama.docx
│   └── GENERAL/
│       └── Standard_Intimation.docx
│
├── static/                             # Static files (CSS, JS, images)
│
├── py_env/                             # Python virtual environment
│
└── data/ (local only)
    └── case_data.json                  # Local file storage (not on Vercel)
```

---

## 🚀 Installation

### Local Setup

#### 1. Clone or Download the Project
```bash
cd g:\police_documents_flasks
```

#### 2. Create Virtual Environment
```bash
python -m venv py_env
py_env\Scripts\activate
```

#### 3. Install Dependencies
```bash
pip install -r requirements.txt
```

#### 4. Run the Application
```bash
python app.py
```

The app will be available at: `http://localhost:5000`

#### 5. Required Dependencies
```
Flask                    # Web framework
python-docx             # Word document manipulation
docxcompose             # Merge Word documents
docx2pdf                # Convert DOCX to PDF
```

---

## 📖 Usage

### Step 1: Home Page - Data Entry

1. Navigate to `http://localhost:5000`
2. Enter all accused details:
   - Name, Father's name, Surname, Alias
   - Gender, Age, Date of Birth
   - Religion, Caste, Subcaste, Nationality, Marital Status
3. Enter occupation details
4. Enter permanent address
5. Enter current address
6. Enter contact & ID information
7. Enter physical description
8. Enter identification marks
9. Enter relative intimation details
10. Enter case details
11. Enter offence details (लागू कलम - applicable section)
12. Enter arrest details
13. Enter bail details
14. Enter status and intimation details
15. Enter investigating officer details
16. Enter authentication details

**Data Persistence:** All entered data is automatically saved to browser's localStorage every time you type or change a field.

### Step 2: Live Preview

- **Left side:** See form data update in real-time
- **Right side:** Live preview of entered information

### Step 3: Select Offence Section

Choose the applicable offence section (कलम) from dropdown:
- 281 (BNS)
- 302 (Murder)
- 379 (Theft)
- 420 (Cheating) - if added
- Other

### Step 4: Proceed to Documents Page

Click **"सेव और आगे वधो (Save & Proceed)"** button.

### Step 5: Documents Page

#### Missing Fields Alert
If required fields are missing:
- Red box shows which fields are needed
- Fill them in the form provided
- Click "Update Missing Data"

#### Document List
- Each document template is listed
- **Preview Button:** Click to see how document will look (modal popup)
- **Download DOCX:** Download single document as Word file
- **Download PDF:** Download single document as PDF

#### Download Options
- **Download All (Separate):** Get all documents as individual files in ZIP
- **Download All (Merged into ONE):** Get single DOCX with all documents (each on new page)
- **Download All PDF (Zip):** Get all PDFs in ZIP
- **Download Merged PDF:** Get single merged PDF (each document on new page)

#### Merged Preview
Right-side panel shows how the merged document will look with all documents combined.

---

## 📊 Data Variables

### A. Accused Details (આરોપી)
```
acc_name          - Name (નામ)
acc_father        - Father's Name (પિતાનું નામ)
acc_surname       - Surname (અટક)
acc_alias         - Alias (ઉર્ફે)
acc_gender        - Gender (લિંગ)
acc_age           - Age (ઉંમર)
acc_dob           - Date of Birth (જન્મ તારીખ)
acc_religion      - Religion (ધર્મ)
acc_caste         - Caste (જાતિ)
acc_subcaste      - Subcaste (પેટાજાતિ)
acc_nationality   - Nationality (રાષ્ટ્રીયતા)
acc_marital       - Marital Status (વૈવાહિક સ્થિતિ)
```

### B. Occupation (વ્યવસાય)
```
occ_type          - Occupation Type (ધંધો)
occ_place         - Place of Work (ધંધાનું સ્થળ)
occ_income        - Income (આવક)
```

### C. Permanent Address (કાયમી સરનામું)
```
perm_house        - House No (મકાન નં)
perm_area         - Area (વિસ્તાર)
perm_village      - Village (ગામ)
perm_taluka       - Taluka (તાલુકો)
perm_district     - District (જીલ્લો)
perm_state        - State (રાજ્ય)
perm_pin          - Pincode (પિનકોડ)
```

### D. Current Address (હાલનું સરનામું)
```
curr_address      - Full Address (સરનામું)
curr_city         - City/Village (શહેર/ગામ)
curr_taluka       - Taluka (તાલુકો)
curr_district     - District (જીલ્લો)
curr_state        - State (રાજ્ય)
curr_pin          - Pincode (પિનકોડ)
```

### E. Contact & ID (સંપર્ક અને ઓળખ)
```
mobile_1          - Primary Mobile (મોબાઈલ ૧)
mobile_2          - Alt Mobile (મોબાઈલ ૨)
id_type           - ID Type (ઓળખ પત્ર પ્રકાર)
id_number         - ID Number (ઓળખ પત્ર નંબર)
```

### F. Physical Description (શારીરિક વર્ણન)
```
phy_height        - Height (ઊંચાઈ)
phy_build         - Build (બાંધો)
phy_complexion    - Complexion (વર્ણ/રંગ)
phy_eyes          - Eye Color (આંખો)
phy_hair          - Hair Color (વાળ)
phy_facial_hair   - Beard/Mustache (દાઢી/મૂછ)
```

### G. Marks (નિશાન)
```
mark_1            - Id Mark 1 (નિશાન ૧)
mark_2            - Id Mark 2 (નિશાન ૨)
old_wounds        - Old Wounds (જુના ઘા)
other_id_marks    - Other Marks (અન્ય ઓળખ)
```

### H. Relative Intimation (સગાને જાણ)
```
rel_name          - Relative Name (સગાનું નામ)
rel_relation      - Relation (સંબંધ)
rel_mobile        - Relative Mobile (મોબાઈલ)
rel_address       - Relative Address (સરનામું)
```

### I. Case Details (કેસ વિગત)
```
case_ps           - Police Station (પોલીસ સ્ટેશન)
case_district     - District (જીલ્લો)
case_taluka       - Taluka (તાલુકો)
crime_no          - Crime Register No (ગુન્હા રજી. નંબર)
crime_type        - Crime Type (ગુન્હા પ્રકાર)
crime_year        - Year (વર્ષ)
```

### J. Offence (ગુન્હો)
```
offence_desc      - Offence Description (વર્ણન)
offence_section   - Applicable Section (લાગુ કલમ) *CRITICAL
offence_place     - Place of Offence (સ્થળ)
offence_date      - Date of Offence (તારીખ)
offence_time      - Time of Offence (સમય)
```

### K. Arrest (અટકાયત)
```
is_arrested       - Is Arrested (અટકાયત છે?)
arrest_date       - Arrest Date (તારીખ)
arrest_time       - Arrest Time (સમય)
arrest_place      - Place of Arrest (સ્થળ)
arrest_entry_no   - Station Diary Entry (એન્ટ્રી નં)
```

### L. Bail (જામીન)
```
is_bailed         - Is Bailed (જામીન પર?)
bail_authority    - Bail Authority (આપનાર)
bail_date         - Bail Date (તારીખ)
bail_time         - Bail Time (સમય)
bail_conditions   - Conditions (શરતો)
```

### M. Status & Intimation (સ્થિતિ અને જાણ)
```
status_proven     - Status Proven (પ્રમાણિત)
status_chargesheet - Chargesheet Status (ચાર્જશીટ)
status_case       - Case Status (કેસ સ્થિતિ)
status_release_date - Release Date (રિલીઝ તારીખ)
intimation_method - Intimation Method (રીત)
intimation_date   - Intimation Date (તારીખ)
intimation_time   - Intimation Time (સમય)
intimation_entry_no - Entry Number (એન્ટ્રી નં)
intimation_entry_time - Entry Time (સમય)
```

### N. Officer & Remarks (અધિકારી)
```
remarks           - Remarks (ટિપ્પણી)
io_name           - IO Name (અમલદાર નામ)
io_designation    - Designation (હોદ્દો)
io_buckle         - Buckle Number (બકલ નં)
io_police_station - IO Police Station (પોલીસ સ્ટેશન)
```

### O. Authentication (પ્રમાણિતકરણ)
```
auth_date         - Document Date (તારીખ)
auth_place        - Place (સ્થળ)
auth_print_name   - Name for Signature (નામ)
```

---

## 📋 Offence Sections & Documents

The application uses a mapping system to determine which documents are needed for each offence section:

### Current Mapping

```python
OFFENCE_MAPPING = {
    "281": [
        "Arrest_Memo_281.docx",
        "Bail_Bond_281.docx",
        "Notice_281.docx"
    ],
    "302": [
        "Arrest_Memo_Major.docx",
        "Remand_Application.docx",
        "Panchnama_Scene.docx"
    ],
    "379": [
        "Arrest_Memo_Theft.docx",
        "Recovery_Panchnama.docx"
    ],
    "GENERAL": [
        "Standard_Intimation.docx"
    ]
}
```

### How It Works

1. User selects `offence_section` (e.g., "302")
2. App looks up section in `OFFENCE_MAPPING`
3. Shows all documents listed for that section
4. Scans each template for placeholders: `[field_name]`
5. Shows only missing fields actually used in those documents
6. When downloading, replaces all placeholders with user data

---

## ➕ Adding New Templates

### To Add Template to Existing Section

**Example: Add "FIR_Copy.docx" to section 302**

#### Step 1: Create Word Template
1. Open Microsoft Word
2. Create your document
3. Use placeholders in format: `[field_name]`
   - Example: `[acc_name]`, `[crime_no]`, `[offence_date]`
4. Save as: `FIR_Copy.docx`

#### Step 2: Place in Correct Folder
```
word_templates/302/FIR_Copy.docx
```

#### Step 3: Update OFFENCE_MAPPING in `app.py`
```python
OFFENCE_MAPPING = {
    ...
    "302": [
        "Arrest_Memo_Major.docx",
        "Remand_Application.docx",
        "Panchnama_Scene.docx",
        "FIR_Copy.docx"              # ← Add this line
    ],
    ...
}
```

#### Step 4: Restart Application
```bash
# Stop current app (Ctrl+C)
python app.py
```

**Done!** The new template appears automatically.

---

### To Add Completely New Offence Section

**Example: Add section "420" (Cheating)**

#### Step 1: Create Folder
```
word_templates/420/
```

#### Step 2: Add Templates
```
word_templates/420/
├── Arrest_Memo_420.docx
├── Notice_420.docx
└── Complaint_Copy.docx
```

#### Step 3: Update `app.py` - OFFENCE_MAPPING
```python
OFFENCE_MAPPING = {
    "281": [...],
    "302": [...],
    "379": [...],
    "420": [                           # ← Add new section
        "Arrest_Memo_420.docx",
        "Notice_420.docx",
        "Complaint_Copy.docx"
    ],
    "GENERAL": [...]
}
```

#### Step 4: Update `index.html` - Dropdown
Find the offence_section select dropdown (around line 125):
```html
<select name="offence_section" class="form-control">
    <option value="281">281 (BNS)</option>
    <option value="302">302 (Murder)</option>
    <option value="379">379 (Theft)</option>
    <option value="420">420 (Cheating)</option>    <!-- Add this -->
    <option value="Other">Other</option>
</select>
```

#### Step 5: Restart Application
```bash
python app.py
```

**Done!** New section is now available.

---

## 📝 Placeholder Format

### Must Use Format:
```
[field_name]
```

### Valid Examples:
```
[acc_name]
[crime_no]
[offence_date]
[io_designation]
```

### Invalid (Won't Work):
```
{acc_name}           # Wrong brackets
{{field_name}}       # Wrong format
[AccName]            # Wrong case
```

### Important Notes:
- Placeholder names must match exactly (case-sensitive)
- Use names from REQUIRED_FIELDS list in app.py
- Each placeholder replaces with data user entered
- If user didn't enter data, placeholder becomes empty string

---

## 🔮 Future Enhancements

### Planned Features

#### 1. User Authentication
```python
- Login/Register system
- Role-based access (Admin, IO, Constable)
- Multiple user accounts
- Audit trail of downloads
```

#### 2. Advanced Search & Filters
```python
- Search cases by accused name
- Filter by offence section
- Date range filters
- Status-based search
```

#### 3. Case History
```python
- Archive completed cases
- View past cases
- Reuse case data
- Case status tracking
```

#### 4. Email Integration
```python
- Email generated documents
- Email notifications
- Batch send to stakeholders
```

#### 5. Analytics & Reporting
```python
- Monthly case statistics
- Offence-wise breakdown
- Performance metrics
- Export reports
```

#### 6. Mobile App
```python
- React Native app
- Offline document access
- Mobile-optimized interface
```

---

## 💾 Database Integration Guide

### Current Storage (Browser localStorage)
- Stores data in client's browser
- Limit: 5-10MB
- Data persists during session
- No server storage

### Why Add Database?

| Need | Solution |
|------|----------|
| Multi-device access | Database |
| Data persistence | Database |
| Multiple users | Database |
| Backup & recovery | Database |
| Analytics & reporting | Database |
| Access control | Database |

---

### Step 1: Choose Database

#### Option A: PostgreSQL (Recommended for Production)
**Pros:** Stable, scalable, free tier available
**Cons:** Setup complexity
**Cost:** Free to $15/month

#### Option B: MongoDB (Recommended for Development)
**Pros:** Easy setup, flexible schema
**Cons:** Less structured
**Cost:** Free (Atlas cloud)

#### Option C: SQLite (Recommended for Local Development)
**Pros:** Zero setup, file-based
**Cons:** Not suitable for production/Vercel
**Cost:** Free

---

### Step 2: Install Database Packages

#### For PostgreSQL:
```bash
pip install flask-sqlalchemy psycopg2-binary
```

#### For MongoDB:
```bash
pip install pymongo
```

#### For SQLite (local only):
```bash
pip install flask-sqlalchemy
```

Update `requirements.txt`:
```
flask-sqlalchemy
psycopg2-binary          # PostgreSQL
# OR
pymongo                  # MongoDB
```

---

### Step 3: Modify `app.py`

#### Add database configuration (after Flask initialization):

**For PostgreSQL:**
```python
from flask_sqlalchemy import SQLAlchemy
import os

app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get(
    'DATABASE_URL',
    'postgresql://user:password@localhost/police_docs'
)
db = SQLAlchemy(app)

class CaseData(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.String(100), unique=True)
    case_data = db.Column(db.JSON)
    created_at = db.Column(db.DateTime, default=datetime.now)
    updated_at = db.Column(db.DateTime, default=datetime.now, onupdate=datetime.now)

# Create tables
with app.app_context():
    db.create_all()
```

**For MongoDB:**
```python
from pymongo import MongoClient

MONGO_URI = os.environ.get(
    'MONGO_URI',
    'mongodb+srv://user:pass@cluster.mongodb.net/police_docs'
)
client = MongoClient(MONGO_URI)
db = client['police_docs']
```

---

#### Replace load_data() function:

**For PostgreSQL:**
```python
def load_data():
    if 'user_id' not in session:
        session['user_id'] = request.remote_addr
    
    user_id = session.get('user_id')
    record = CaseData.query.filter_by(user_id=user_id).first()
    return record.case_data if record else {}
```

**For MongoDB:**
```python
def load_data():
    if 'user_id' not in session:
        session['user_id'] = request.remote_addr
    
    user_id = session.get('user_id')
    record = db['case_data'].find_one({'user_id': user_id})
    return record['data'] if record else {}
```

---

#### Replace save_data() function:

**For PostgreSQL:**
```python
def save_data(data):
    user_id = session.get('user_id')
    record = CaseData.query.filter_by(user_id=user_id).first()
    
    if record:
        record.case_data = data
        record.updated_at = datetime.now()
    else:
        record = CaseData(user_id=user_id, case_data=data)
    
    db.session.add(record)
    db.session.commit()
    session['case_data'] = data
    session.modified = True
```

**For MongoDB:**
```python
def save_data(data):
    user_id = session.get('user_id')
    db['case_data'].update_one(
        {'user_id': user_id},
        {
            '$set': {
                'data': data,
                'updated_at': datetime.now()
            }
        },
        upsert=True
    )
    session['case_data'] = data
    session.modified = True
```

---

### Step 4: Update Frontend

#### Remove localStorage code from `index.html`:
```javascript
// DELETE THIS:
function loadFromLocalStorage() { ... }
function saveToLocalStorage() { ... }
window.addEventListener('load', loadFromLocalStorage);
document.addEventListener('change', saveToLocalStorage);
```

#### Keep only API calls:
```javascript
function saveToDatabase() {
    let data = {};
    document.querySelectorAll('input, select, textarea').forEach(el => {
        if (el.name) data[el.name] = el.value;
    });
    fetch('/api/save_data', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    });
}

window.addEventListener('load', function() {
    fetch('/api/load_data')
        .then(r => r.json())
        .then(data => {
            for (let key in data) {
                let input = document.querySelector(`[name="${key}"]`);
                if (input) input.value = data[key];
            }
        });
});

document.addEventListener('change', saveToDatabase);
document.addEventListener('input', saveToDatabase);
```

---

### Step 5: Local Testing

#### For PostgreSQL:
```bash
# Install PostgreSQL
# Create database
createdb police_docs

# Install packages
pip install -r requirements.txt

# Run app
python app.py
```

#### For MongoDB:
```bash
# Sign up at https://www.mongodb.com/cloud/atlas
# Create free cluster
# Get connection string

# Set environment variable
set MONGO_URI=mongodb+srv://user:pass@cluster.mongodb.net/police_docs

# Install packages
pip install -r requirements.txt

# Run app
python app.py
```

---

### Step 6: Deploy to Vercel

#### For PostgreSQL:
```
1. Use Railway.app or Render.com (free tier available)
2. Create PostgreSQL database
3. Copy connection string
4. Add to Vercel environment variables:
   DATABASE_URL = your_connection_string
5. Deploy app
```

#### For MongoDB:
```
1. Sign up at MongoDB Atlas (free)
2. Create cluster
3. Get connection string
4. Add to Vercel environment variables:
   MONGO_URI = your_connection_string
5. Deploy app
```

#### Update `vercel.json`:
```json
{
  "env": {
    "DATABASE_URL": "@database_url",
    "MONGO_URI": "@mongo_uri"
  }
}
```

---

### Comparison Table

| Aspect | PostgreSQL | MongoDB | SQLite |
|--------|-----------|---------|--------|
| Setup | Medium | Easy | Trivial |
| Cost | Free/Cheap | Free | Free |
| Scalability | Excellent | Good | Poor |
| Vercel Support | ✅ | ✅ | ❌ |
| Production Ready | ✅ | ✅ | ❌ |
| Complexity | Medium | Low | Very Low |
| Best For | Production | Development | Local Testing |

---

### Testing Database Connection

```python
# Add this to app.py to test
@app.route('/test_db')
def test_db():
    try:
        test_data = {'test': 'connection', 'timestamp': str(datetime.now())}
        save_data(test_data)
        loaded = load_data()
        return {'status': 'success', 'data': loaded}
    except Exception as e:
        return {'status': 'error', 'message': str(e)}, 500
```

Visit `http://localhost:5000/test_db` to verify connection.

---

## 🌐 Deployment

### Deploy to Vercel

#### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

#### Step 2: Login to Vercel
```bash
vercel login
```

#### Step 3: Deploy
```bash
cd g:\police_documents_flasks
vercel
```

#### Step 4: Set Environment Variables (if using database)
1. Go to Vercel Dashboard
2. Select your project
3. Settings → Environment Variables
4. Add `DATABASE_URL` or `MONGO_URI`

---

### Deploy to Other Platforms

#### Heroku (Deprecated but still available):
```bash
heroku create your-app-name
git push heroku main
```

#### Railway.app:
```bash
1. Sign up at railway.app
2. Import GitHub repository
3. Deploy
```

#### Render.com:
```bash
1. Sign up at render.com
2. Create Web Service
3. Deploy
```

---

## 🐛 Troubleshooting

### Issue: Placeholders Not Replacing

**Problem:** `[field_name]` appears in downloaded document instead of actual data

**Solutions:**
1. Verify placeholder format is exactly `[field_name]`
2. Check field name matches REQUIRED_FIELDS list
3. Ensure data was entered before download
4. Check template file is not corrupted
5. Verify field name is case-sensitive

### Issue: PDF Generation Fails

**Problem:** "PDF generation failed" error

**Solutions:**
1. Install LibreOffice: `choco install libreoffice` (Windows)
2. Restart application after LibreOffice install
3. Check file permissions on temp folder
4. Try DOCX download instead
5. Check app.py for PDF function errors

### Issue: localStorage Not Saving

**Problem:** Data disappears after refresh

**Solutions:**
1. Check browser localStorage settings (not disabled)
2. Verify JavaScript console for errors
3. Clear browser cache and cookies
4. Try different browser
5. Check localStorage API is enabled

### Issue: 404 Template Not Found

**Problem:** "Template not found" error on download

**Solutions:**
1. Verify template file exists in correct folder
2. Check filename matches exactly (case-sensitive)
3. Verify folder path: `word_templates/[section]/`
4. Ensure OFFENCE_MAPPING is updated
5. Restart Flask application

### Issue: Missing Fields Form Shows All Fields

**Problem:** Should show only fields used in selected templates

**Solutions:**
1. Verify templates contain placeholders `[field_name]`
2. Check OFFENCE_MAPPING has correct doc list
3. Ensure section is selected before proceeding
4. Clear browser cache
5. Restart application

---

## 📞 Support & Contact

For issues or questions:
1. Check Troubleshooting section above
2. Review code comments in app.py
3. Check template file formatting
4. Verify all requirements installed

---

## 📄 License

This project is provided as-is for police department use.

---

## 🔄 Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | Jan 2026 | Initial release with core features |
| 1.1.0 | Jan 2026 | Added localStorage persistence |
| 1.2.0 | Jan 2026 | Vercel deployment ready |
| 2.0.0 (Planned) | Future | Database integration |

---

##  Additional Resources

- [Flask Documentation](https://flask.palletsprojects.com/)
- [python-docx Documentation](https://python-docx.readthedocs.io/)
- [Vercel Deployment Guide](https://vercel.com/docs)
- [PostgreSQL Setup Guide](https://www.postgresql.org/docs/)
- [MongoDB Atlas Guide](https://docs.atlas.mongodb.com/)

---

**Last Updated:** January 31, 2026
**Application Version:** 1.2.0
