<b>Business Permit and Licensing</b>
===

<br />

<b>Overview</b>
===

<br />

The BPL Module automatically calculates the taxes, fees and charges when applying for new or renewing a business. The output for this module is the issuance of the business permit. ETRACS controls all aspects of the process like the ability to block issuance of permits when the proper fees and taxes are not paid. The following are the major activities for this module:

1. Application for New Permit or Renewal
2. Business assessment
3. Payment of taxes, fees and charges
4. Issuance of business permit

<br />
<br />
<br />

<b>Features</b>
===

ETRACS is a project continuously improved with innovation. Many additions are added in version 2.5 to make business assessments much smarter. The following are the highlights of the new system:

1. Support for BIN – The Business Index No is a unique identifier for the business. It is also unique across all other ETRACS implementations. This is in preparation for usage in the cloud. 
2. Barcode Support – this is a time saver for searching documents and especially useful for business collections. 
3. Workflow – the internal workflow creates tasks and logs the time when the task was completed. Information like how long a certain step was processed, the status of the document and who to follow up can be derived. This is useful in supporting the ARTA (anti-red tape act).
4. Support for Unified Form – To comply with DTI requirements, the unified form information and gender sensitivity is supported. 
5. Paperless Transactions – the goal of the system is eventually to go paperless, so the workflow was designed to allow an LGU to capture immediately the information through interview without filling up paper forms. The application form will be printed after the last step so everything will be final and erasures will be eliminated.
6. Better security – the system controls who can edit the system. Data from the business information cannot be edited by the assessors and vice versa. Only the person starting the task can update it, for example if an assessment done by assessor A was sent back by the approver for reassessment, only assessor A can edit otherwise it has to be reassigned if assessor A is not available. 
7. Rich Support for Business Location – before the address was entered in plain text. But because the address, or business location plays an important role in assessments, the system improved support for specifying addresses. This includes support for asking for more information if address is rented and the ability to match lessors and knowing businesses renting in their building.

<br />
<br />
<br />

<b>Roles and Permissions</b>
===

<br />

The following roles are needed for this module:


DOMAIN: BPLS

<br />

![alt text][roles]

<br />
<br />
<br />

<b>Master Data Management</b>
===

<br />

## <b>Business Requirements</b>

<br />

The Business Requirements is a master list of requirements to run a business. The rule engine uses this to configure which requirements are needed for a certain business depending on the number of factors like business classification. Requirements are usually documents. To add requirements go to <b>Main Menu > Master > BPLS > Business Requirements</b>. Double click the menu to view a list of requirements. There are already pre-defined requirements in the system.  The listing will show all the defined requirements. To open a record, click on the selected item. 

<br />

![alt text][requirements]

<br />

This will open the form:

![alt text][form]

<br />

- <b>Code</b> – refers to the code of the requirement
- <b>Title</b> – Title of the document
- <b>Handler</b> – reserved for special handling of this requirement. This is used for plug-ins. For example, the CTC plug-in was acquired by the LGU. We can reference the handler so that instead of inputting ordinary text,  we can lookup the ctc record created by the system.

<br />
<br />
<br />

## <b>Line of Business Classification</b>

<br />

Line of business classification is the general classification for business activities or lines of business. The vision of ETRACS is to move towards standardization, so this will not be editable by the user. Instead this listing will be maintained by Rameses and if a business classification is needed, only Rameses can add it. This information will be hosted in the cloud and will be synced if there are new additions.

<br />
<br />
<br />

## <b>Line of Business</b>

<br />


Line of business refers to the activities carried out by certain business. This is important because assessments will be dependent on the nature of business activity or its line of business. Businesses can have as many lines of business. Eventually line of business will also be standardized in the future, and Rameses is studying how LGUs are using it and based on information that will be gathered, the best practices will be consolidated and suggested in a forum for all ETRACS users.  

<br />
<br />
<br />

## <b>Business Variable</b>

<br />

Business Variables are used in rules as business info. Businesses may have different information needs depending on the business. A business variable represents a single value and you need to specify what type of value it is as follows:

- Decimal = must be a decimal value. Used for amounts
- Integer = must be a whole number. Used for counting
- String = used to collect text information
- Boolean = accepts yes or no, true or false
- String array = allows one to select a defined list of strings

<br />
<br />
<br />

## <b>BP Expiry Date</b>

<br />

Billing is dependent on the expiry date as it is the determining factor for penalties or discounts. Normally deadline dates are on the 20th day of every quarter. However this date can be moved for example extensions. Setting the expiry dates will affect business billing.

<br />
<br />
<br />

<b>Rule Management</b>
===

<br />

<b>Overview</b>
===

<br />

There are 3 rulesets in the Business Permits Module as follows:

<br />

![alt text][rulesets]

<br />
<br />
<br />

## <b>Facts</b>

<br />

The following are the common facts used in the system. Some facts are shared while others are only used for a certain ruleset. 

<br />

![alt text][facts1]
![alt text][facts2]

<br />
<br />
<br />

## <b>Actions</b>

<br />

The following actions are used in the business module:

![alt text][actions1]
![alt text][actions2]

<br />
<br />
<br />

## <b>Rules</b>

<br />

There are three rulesets executed for business permit and licensing – the bpinfo, bpassessment and bpbilling. This section describes each rule.

<br />
<br />
<br />

### <b>BP Info</b>

<br />

The BPInfo rules are executed by the business information section. This refers to the frontline for accepting new business applications, renewing, retiring or amending applications. The basic information may include the number of employees, how many male or female employees or something of that nature. To edit these rules go to <b>Main Menu > Rule Management > BP Info Rules</b>. To add or remove rules, please refer to the Rule Management Section.

The system accompanies the important rules. You need to deploy these rules if necessary.

<br />
<br />
<br />

## <b>Authoring Rules</b>

<br />

### <b>Billing Rules</b>

<br />

The Billing Rules calculates surcharges and penalties. One of the common rules of the is the quarterly billing of business tax which is

<i>Split By Qtr:</i>


![alt text][rules]

<br />
<br />

<i>Interest Computation:</i>

This rule

![alt text][computation]

<br />
<br />
<br />

<b>Transactions</b>
===

<br />

### <b>Application</b>

New <br />
Renew <br />
Retire <br />
Amend <br />
Late Renewal <br />

<br />
<br />

### <b>Assessment</b>

Viewing Pending Assessments <br />
Assess Application <br />
Approval of Application <br />
Printing Assessment <br />
Printing of Bill <br />

<br />
<br />

### <b>Collection</b>

Collection Settings <br />
Processing Collection <br />

<br />
<br />

### <b>Issuance of Permit</b>

Releasing Permit <br />
Issuance of Permit <br />
Changing Business Information <br />
Customizing Permit Report <br />

<br />
<br />

### <b>Reports</b>

Line of Business Listing <br />
Business Master List <br />
List of Employers <br />
Application Listing <br />
Business Permit Listing <br />
Business Comparative Assessment Listing <br />
Business Comparative Listing <br />
Line of Business Count Listing <br />
Top Business Listing <br />
Summary of Business Permit <br />
Quarterly Paid Business Listing <br />
Business Collection Report <br />
Business Delinquency <br />


















[roles]: ./images/7-a.png
[requirements]: ./images/7-b.png
[form]: ./images/7-c.png
[rulesets]: ./images/7-d.png
[facts1]: ./images/7-e1.png
[facts2]: ./images/7-e2.png
[actions1]: ./images/7-f1.png
[actions2]: ./images/7-f2.png
[rules]: ./images/7-g.png
[computation]: ./images/7-h.png
