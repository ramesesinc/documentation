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

## <b>Exemption Types</b>

<br />

Exemptions are granted to real properties either under constitutional provisions, statutory provisions and any other applicable guidelines. The standard applicable exemptions are shown in <b>Error! Reference source not found..</b> These exemptions are automatically loaded by default.


![alt text][exemption]

<br />

1. To create a new record, enter ET01 on the Quick Launcher box and press <b>ENTER</b> or open the list view and click  New  from the toolbar to open the new page.
	
	![alt text][create2]


2. Enter the required information:

	a. <b>Code</b> – the assigned exemption code
	
	b. <b>Name</b> – the complete exemption name

	c. <b>Order No.</b> – represents the order in which it is displayed 


3. Click on  Save or press  Ctrl+S  to commit the changes.

<br />
<br />
<br />

## <b>Reason for Cancellation of FAAS</b>

<br />

This is the reason for cancelling a FAAS record.  The corresponding FAAS of a property is sometimes cancelled due to some extra-ordinary circumstances such as demolition, destruction or even duplication of entry due from manual processes. Below are common reasons for cancellation.

![alt text][cancellation]


1. To create a new record, enter CTF01 on the Quick Launcher box and press <b>ENTER</b> or open the list view and click  New  from the toolbar to open the new page.

	![alt text][create3]


2. Enter the required information:

	a. <b>Code</b> – the assigned code

	b. <b>Title</b> – the complete title information

	c. <b>Description</b> – a brief description of the record

3. Click on  Save or press  Ctrl+S  to commit the changes.

<br />
<br />
<br />

## <b>Kind of Buildings</b>

<br />

Buildings are structures with foundation, roof, walls and other structural features that are suitable for appraisal and assessment. They are considered immovable provided they are more or less of a permanent structure, substantially adhered to the land, and not mere superimpositions on the land. This includes buildings such as One-Family Dwelling, Two-Family Dwelling, Hotel and etc. 

<br />

<b><i>Important!!!</i></b>

To avoid ambiguity in any printed reports, each kind of building must be encoded separately into the system. 

1. To create a new record, enter KB01 on the Quick Launcher box and press <b>ENTER</b> or open the list view and click  New  from the toolbar to open the new page.

	![alt text][create4]


2. Enter the required information:

	a. <b>Code</b> – the assigned code 

	b. <b>Kind of Building</b> – the kind of building name

3. Click on  Save or press  Ctrl+S  to commit the changes.

<br />
<br />
<br />

## <b>Materials</b>

<br />

The different materials used in the construction of a building such as reinforced concrete and wood. Materials are referenced when defining the “Building Type” of a particular building such as Type IA – Reinforced Concrete and during assessment of building properties.

<br />

1. To create a new record, enter MAT01 on the Quick Launcher box and press <b>ENTER</b> or open the list view and click  New  from the toolbar to open the new page.

	![alt text][create5]


2. Enter the required information:

	a. <b>Code</b> – the assigned code 

	b. <b>Material</b> – the material name 

3. Click on  Save or press  Ctrl+S  to commit the changes.

<br />
<br />
<br />

## <b>Structures</b>

<br />

The different structures used in the construction of a building such as foundation and partition. Structures are referenced when creating “Building Type” such as Type IA – Reinforced Concrete.

<br />

1. To create a new record, enter ST01 on the Quick Launcher box and press <b>ENTER</b> or open the list view and click  New  from the toolbar to open the new page.

	![alt text][create6]


2. Enter the required information:

	a. <b>Code</b> – the assigned code 

	b. <b>Structure</b> – the structure name 

	c. <b>Index No.</b> – the position of the structure in the FAAS printout


3. <b>Applicable Materials</b> – lookup the materials applicable for the structure.

	a. In the Code column, enter a few characters of the material to search and press <b>ENTER</b>.

	b. Repeat the process for each material to add.


4. Click on  Save or press  Ctrl+S  to commit the changes.

<br />
<br />
<br />

## <b>Machines</b>

Machinery is a general classification of property other than real estate. Machinery includes installation and support facilities for processing or manufacturing of products, from raw materials to finished goods. 

<br />

1. To create a new record, enter MACH01 on the Quick Launcher box and press <b>ENTER</b> or open the list view and click  New  from the toolbar to open the new page.

	![alt text][create7]


2. Enter the required information:

	a. <b>Code</b> – the assigned code 

	b. <b>Machine</b> – the machine name


3. Click on  Save or press  Ctrl+S  to commit the changes.

<br />
<br />
<br />

## <b>Plants and Trees</b>

<br />

Trees are woody plants with a single trunk and growing to a considerable height. They also have lateral branches up from the ground. It includes the likes of Coconut and Mango trees. A plant is a kind that is exemplified by trees which includes Banana and Nipa Plant.

<br />

1. To create a new record, enter PT01 on the Quick Launcher box and press <b>ENTER</b> or open the list view and click  New  from the toolbar to open the new page.

	![alt text][create8]


2. Enter the required information:

	a. <b>Code</b> – the assigned code 

	b. <b>Plant/Tree</b> – the plant or tree name


3. Click on  Save or press  Ctrl+S  to commit the changes.

<br />
<br />
<br />

## <b>Miscellaneous Items</b>

<br />

Miscellaneous Item is a property that cannot be classified as land, building, machinery or plant and tree.

This includes perimeter fence, covered walk or communication tower.

<br />

1. To create a new record, enter MISC01 on the Quick Launcher box and press <b>ENTER</b> or open the list view and click  New  from the toolbar to open the new page.

	![alt text][create9]

   
2. Enter the required information:

	a. <b>Code</b> – the assigned code 

	b. <b>Miscellaneous Item</b> – the miscellaneous item name


3. Click on  Save or press  Ctrl+S  to commit the changes.

<br />
<br />
<br />

## <b>Parameters</b>

<br />

Parameters are user-defined data that can be used by the application either to collect dynamic information or directly used in a computation. An example of parameters is distance in km, height or width. 

<br />

1. To create a new record, enter RPAR01 on the Quick Launcher box and press <b>ENTER</b> or open the list view and click  New  from the toolbar to open the new page.

	![alt text][create10]


2. Enter the required information:

	a. <b>Name</b> – the name of the parameter. Name must start with a letter and be followed by alphanumeric characters. It must not contain any spaces. Use the underscore "_ " character to separate multiple words.
	
	b. <b>Caption</b> – the caption displayed in the user interface or reports

	c. <b>Description</b> – a brief information describing the parameter

	d. <b>Data Type</b> – the data represented by this parameter. Valid types are decimal, integer, range_decimal and range_integer. The range_integer and range_decimal values are used when a parameter requires a value that should be within a range of values. If the range_decimal or range_integer types are selected, enter the Minimum and Maximum values. The minimum value must be less than the maximum value.


3. Click on  Save or press Ctrl+S to commit the changes.

<br />
<br />
<br />

## <b>Requirement Types</b>

<br />

The type of requirements needed or required when processing a transaction such as Realty Tax Clearance, Deed of Absolute Sale, etc.

<br />

1. To create a new record, enter REQ01 on the Quick Launcher box and press <b>ENTER</b> or open the list view and click  New  from the toolbar to open the new page.

	![alt text][create11]
    

2. Enter the required information:

	a. <b>Requirement Type</b> – the requirement type name

	b. <b>Description</b> – a brief description of the requirement 

	c. <b>Handler</b> – the screen that would handle this requirement. The “default” handler is currently the only supported value.

	d. <b>Sort Order</b> – the priority at which the requirement is displayed


3. Click on  Save or press  Ctrl+S  to commit the changes.

<br />
<br />
<br />

<b>Settings and Preferences</b>
===

<br />

Settings and Preferences are critical to the proper operation of the system. It controls different areas including assessment, computation, signatories and workflow processes. The appropriate behavior of the system is dependent on the correct setup of the settings and configuration of the preferences.

<br />

## <b>Signatory Template</b>

<br />

The signatory template identifies the different personnel who have signed the FAAS appraisal sheet. This is used in the capturing of manual FAAS records into the system. The template includes only the four (4) key positions, namely: Appraiser, Taxmapper, Recommender and Approver.

<br />
<br />

### <b>Adding New Signatories</b>

<br />

1. To add a new signatory, open the Main Menu.

2. Open the Signatory Templates list page by double-clicking the <b>Settings -> Signatory Templates</b> item.

	![alt text][signatory]


3. Select the Doc Type item in which to add a new signatory and then click  Open  to display the signatory page.

	![alt text][signatorypage]


4. The screen above allows you to manage the signatories.


5. Click Add to open the new signatory page.

	![alt text][newsignatory]

	<br />

a. Enter the following information:

- First Name – the first name of the signatory. This is required.
- Middle Name - the middle name of the signatory.
- Last Name - the last name of the signatory. This is required.
- Title - the job title of the signatory. This is required.
- Department - the department of the signatory. This is required. <br />

b. Or you can click on  Search Personnel  and select existing personnel from the lookup list.

![alt text][search]

6. Click Save.

7. Click Close.



























[roles]: ./images/9-a.png
[classification]: ./images/9-b.png
[create]: ./images/9-c.png
[exemption]: ./images/9-d.png
[create2]: ./images/9-e.png
[cancellation]: ./images/9-f.png
[create3]: ./images/9-g.png
[create4]: ./images/9-h.png
[create5]: ./images/9-i.png
[create6]: ./images/9-j.png
[create7]: ./images/9-k.png
[create8]: ./images/9-l.png
[create9]: ./images/9-m.png
[create10]: ./images/9-n.png
[create11]: ./images/9-o.png
[signatory]: ./images/9-p.png
[signatorypage]: ./images/9-q.png
[newsignatory]: ./images/9-r.png
[search]: ./images/9-s.png