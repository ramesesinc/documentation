<b>Real Property Assessment</b>
===

<br />

<b>Overview</b>
===

<br />

The Real Property Assessment (RPA) Module is one of the core components of ETRACS. It is responsible for managing real property data. The information of real properties such as owners, land, machinery, buildings and improvements are maintained and efficiently accessible. It handles the automation of appraisal and assessment process of real property by the Office of the Assessor. It also integrates with the Tax Collection module to complete the business cycle of real property taxation.

<br />
<br />
<br />

## <b>Design Objectives</b>


The main objective of the RPA module is to provide a fully-functional and automated system for the management of real property data and to streamline the operations of the Assessor’s Office for fast and efficient delivery of basic services to its clients. Sharing data and integration with the other departments within the enterprise is also vital inorder to offer a complete end-to-end assessment and collection solution benefitting both the LGU and the taxpayers.

<br />
<br />
<br />

## <b>Key Features</b>


The key features of the RPA module in attaining its objectives are:

- <b>Flexibility</b> – settings are very flexible and highly configurable making the system responsive to the ever changing business requirements and needs <br />
- <b>Fully Automated</b> – appraisal and assessment are fully automated guaranteeing highly accurate and fair computations <br />
- <b>Workflow Support</b> – transactions are controlled by a workflow process which tracks the status of documents, where it is and how long it is under processing. <br /> 
- <b>Data Security</b> – data protection is vital and critical when it is shared throughout the enterprise. The data is strongly protected through an elaborate security protocol and authorization process. <br />
- <b>Online Certifications</b> – accurate and efficient issuance of certifications online 
- <b>Report Generation</b> – generations of on-time and accurate management reports

<br />
<br />
<br />

## <b>Security Requirements</b>


As with all ETRACS modules, the Real Property Assessment Module has security requirements that must be satisfied before any transaction can be performed on the system. This ensures that users are given the proper authorizations and permissions. Users of the system are associated with any of the built-in real property assessment roles or specific user-defined roles.

<br />
<br />
<br />

### <b>Roles and Permissions</b>
 

The security of ETRACS revolves around Roles and Permissions. <b>Roles</b> normally represent domain specific “role” such as Appraiser or Assessor. System Roles are built-in and are provided as part of the internal security setting. For more information on security, see <i>ETRACS Security Model</i>.


The assignment of roles is normally performed by the System Administrator. The main purpose of the task is to provide the user with valid authorization and access into the system. Roles are categorized or classified according to their function in the organization.


![alt text][roles]

<br />
<br />
<br />

<b>Master Data Management</b>
===

<br />

The Real Property Assessment module requires a number of master files. These master files must be setup before performing any transaction. It ranges from a simple list of items to settings that require the user to be familiar with the schedules of market values, adjustments, computations and formula definition used during assessment. In order to avoid unnecessary setup issues and problems, the order of which the master files are created must be followed accordingly as described in the succeeding sections.

<br />
<br />
<br />

## <b>Property Classifications</b>

<br />

Classification is the process of identifying and classifying properties in accordance with shared qualities or characteristics. The standard property classifications follow the RACIMTS guideline shown in <b>Error! Reference source not found..</b> These are normally loaded into the system by default. However, new classification can still be added if necessary. 


![alt text][classification]

<br />

1. To create a new record, enter PC01 on the Quick Launcher box and press <b>ENTER</b> or open the list view and click  New  from the toolbar to open the new page. <br />
	
	![alt text][create]


2. Enter the required information:

	a. <b>Code</b> – the assigned classification code

	b. <b>Classification</b> – the complete classification name

	c. <b>Is Special?</b> – check if the classification is special such as Hospital, Cultural, etc.

	d. <b>Order No.</b> – represents the order in which it is displayed

3. Click on  Save or press  Ctrl+S  to commit the changes.

<br />
<br />
<br />

## <b>Exemption Types<b/>

<br />

Exemptions are granted to real properties either under constitutional provisions, statutory provisions and any other applicable guidelines. The standard applicable exemptions are shown in <b>Error! Reference source not found..</b> These exemptions are automatically loaded by default.


![alt text][exemption]

<br />

1. To create a new record, enter ET01 on the Quick Launcher box and press <b>ENTER</b> or open the list view and click  New  from the toolbar to open the new page. <br />

![alt text][create2]


2. Enter the required information:

	a. <b>Code</b> – the assigned exemption code
	
	b. <b>Name</b> – the complete exemption name

	c. <b>Order No.</b> – represents the order in which it is displayed 


3. Click on  Save or press  Ctrl+S  to commit the changes.




















[roles]: ./images/9-a.png
[classification]: ./images/9-b.png
[create]: ./images/9-c.png
[exemption]: ./images/9-d.png