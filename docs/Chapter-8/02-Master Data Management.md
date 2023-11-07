## Master Data Management

### Business Requirements

The Business Requirements is a master list of requirements to run a
business. The rule engine uses this to configure which requirements are
needed for a certain business depending on the number of factors like
business classification. Requirements are usually documents. To add
requirements go to **Main Menu &gt; Master &gt; BPLS &gt; Business
Requirements.** Double click the menu to view a list of requirements.
There are already pre-defined requirements in the system. The listing
will show all the defined requirements. To open a record, click on the
selected item.

![image|512x397,100%](images\image141.png)
<!-- <img src="images\image141.png" style="width:4.17117in;height:0.7502in" /> -->

This will open the form

![image|512x397,100%](images\image142.png)
<!-- <img src="images\image142.png" style="width:2.96317in;height:1.42126in" /> -->

Code – refers to the code of the requirement

Title – Title of the document

Handler – reserved for special handling of this requirement. This is
used for plug-ins. For example, the CTC plug-in was acquired by the LGU.
We can reference the handler so that instead of inputting ordinary text,
we can lookup the ctc record created by the system.

### Line of Business Classification

Line of business classification is the general classification for
business activities or lines of business. The vision of ETRACS is to
move towards standardization, so this will not be editable by the user.
Instead this listing will be maintained by Rameses and if a business
classification is needed, only Rameses can add it. This information will
be hosted in the cloud and will be synced if there are new additions.

### Line of Business

Line of business refers to the activities carried out by certain
business. This is important because assessments will be dependent on the
nature of business activity or its line of business. Businesses can have
as many lines of business. Eventually line of business will also be
standardized in the future, and Rameses is studying how LGUs are using
it and based on information that will be gathered, the best practices
will be consolidated and suggested in a forum for all ETRACS users.

### Business Variable

Business Variables are used in rules as business info. Businesses may
have different information needs depending on the business. A business
variable represents a single value and you need to specify what type of
value it is as follows:

Decimal = must be a decimal value. Used for amounts

Integer = must be a whole number. Used for counting

String = used to collect text information

Boolean = accepts yes or no, true or false

String array = allows one to select a defined list of strings

### BP Expiry Date

Billing is dependent on the expiry date as it is the determing factor
for penalties or discounts. Normally deadline dates are on the
20<sup>th</sup> day of every quarter. However this date can be moved for
example extensions. Setting the expiry dates will affect business
billing.