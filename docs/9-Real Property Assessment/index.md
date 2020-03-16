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

<br />


The main objective of the RPA module is to provide a fully-functional and automated system for the management of real property data and to streamline the operations of the Assessor’s Office for fast and efficient delivery of basic services to its clients. Sharing data and integration with the other departments within the enterprise is also vital inorder to offer a complete end-to-end assessment and collection solution benefitting both the LGU and the taxpayers.

<br />
<br />
<br />

## <b>Key Features</b>

<br />


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

<br />


As with all ETRACS modules, the Real Property Assessment Module has security requirements that must be satisfied before any transaction can be performed on the system. This ensures that users are given the proper authorizations and permissions. Users of the system are associated with any of the built-in real property assessment roles or specific user-defined roles.

<br />
<br />
<br />

### <b>Roles and Permissions</b>

<br />
 

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

<br />

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

<br />
<br />
<br />

## <b>Assessor Settings and Preferences</b>

<br />

The assessor settings and preferences are options that control the processing and behavior of transactions, reports and workflows. The complete settings are:

<br />

![alt text][settings1]
![alt text][settings2]
![alt text][settings3]

<br />
<br />
<br />

## <b>Editing Settings and Preferences</b>

<br />

1. To edit the settings and preferences, open the Main Menu explorer.

2. Navigate and double-click <b>Settings -> Assessors -> Assessor Settings and Preferences</b> item.

![alt text][editsettings]


3. Setup the correct settings and then click  Update .

4. Click on the ![alt text][arrow] to move from page to page.

<br />
<br />
<br />

<b>Managing General Revision Settings</b>
===

<br />

The General Revision Settings are essential in the proper computation of real property assessments. The setting includes the Schedule of Fair Market Value and applicable adjustments. The SFMV must be approved by the Local Government before it must be adopted for implementation. An associated revision setting must be created for every General Revision implemented and mandated by the LGU.

<br />
<br />
<br />

## <b>Land Revision Setting</b>

<br />

This is the setting that controls the assessment computation of land property. Included are settings for Assessment Levels, Land Classification and Unit Values, Land Adjustments and Land Actual Use Adjustments. It is imperative that the actual schedule values from the approved ordinance must be followed to avoid unnecessary administrative complications. 

<br />

1. On the Main Menu explorer, navigate and double-click <b>Settings -> Assessor -> Land Revision Settings</b> item.

2. On the list page, click on  New  to open the New Revision Setting page.

![alt text][revision]

3. Enter the Revision Year and click Save. After successfully saving the record, the main screen is displayed. The main screen is categorized into several tabs. The tabs are the Assessment Level, Land Classification and Unit Values (LCUV), Land Adjustments and Applied to the following LGUs as shown below.

![alt text][revision2]

<br />
<br />
<br />

## <b>Assessment Levels</b>

<br />

The Assessment Level tab defines all applicable assessment rates for each actual use. The rates are used to compute the assessed value of a property. 

![alt text][assessment]

<br />

1. To add a new assessment level, click on the “Code” column of the last empty row.

2. Enter the following information by moving from column to column:

	a. <b>Code</b> – a required assessment level code

	b. <b>Name</b> – a required assessment level name

	c. <b>Fix?</b> – indicates whether the rate is a fixed amount or based on a range of values.

	d. <b>Rate</b> – the assessment level rate expressed as percentage

	e. <b>Classification</b> – a lookup that references one of the standard property classifications 

3. Commit the record by moving the cursor to the next row.

<br />
<br />
<br />

## <b>Assessment Level Ranges</b>

<br />

In cases where the assessment level is not “Fix”, then range entries must be defined. The range is based on graduated market values with corresponding assessment rates.

![alt text][range]


1. To enter a new range, click on the MV less than column of an empty row.

2. Enter the upper range value. If this is the last value, enter zero (0) as the max value. The zero value indicates infinite number. Press Enter to commit the entry.

3. Enter the rate in percentage and then press Enter.

4. Move the cursor to the next row to commit the record.

5. Repeat steps 1-4 and enter all ranges.

<br />
<br />
<br />

## <b>Land Classification and Unit Values (LCUV)</b>

<br />

The LCUV is the setting that defines the market values for each classification of land. The market values must be taken from the approved schedule as mandated by the local revenue code. The LCUV is divided into two main categories, namely: the specific classes and subclasses. Specific class is a specific “grouping” of land types per classification. Examples include Banana Land and Coconut Land for the agricultural classification. The Sub-Class defines the different class ratings of the specific land such as 1st class, 2nd class, etc.

![alt text][class]

<br />
<br />
<br />

## <b>Specific Classes</b>

<br />

1. Select the type of classification from the Classification combo box.

2. On the specific class list, click on the Code column of the first empty row.

3. Enter the following information:

	a. <b>Code</b> – required specific class code

	b. <b>Name</b> – required specific class name

	c. <b>Area Type</b>- the type of area for this specific class. The valid values are HA and SQM.

4. After entering the Area Type, press <b>Enter</b> to commit the item.

5. Repeat steps 1 – 4 to enter all specific classes.

<br />
<br />
<br />

## <b>Sub-Classes</b>

<br />

1. Select a Specific Class you want to add sub-classes.

2. On the Sub Class list, click on the Code column of the first empty row.

3. Enter the following information:

	a. <b>Code</b> – required subclass code

	b. <b>Name</b> – required subclass name

	c. <b>Unit Value</b> – the approved unit value for this class.

4. After entering the Unit Value, press <b>Enter</b> to commit the item.

5. Repeat steps 1 - 4 to add all sub-classes.

<br />
<br />
<br />

## <b>Strippings</b>

<br />

Stripping levels can also be associated with a classification. Stripping normally reduces the applicable unit value of the property thereby reducing the computed market value.

![alt text][strippings]

<br />

To define stripping levels for a classification

1. Select the classification to add stripping from the Classification combo box.

2. On the Stripping list, click on the Strip Level column of the first empty row.

3. Enter the following information:

	a. <b>Stripping Level</b> – the strip level no.

	b. <b>Rate (%)</b> – the stripping rate in percentage.

4. After entering the Rate, press Enter to commit the item.

5. Repeat steps 1 – 4 to add all stripping levels.

<br />
<br />
<br />

## <b>Land Adjustments</b>

<br />

The land adjustments are additional adjustments applicable to the assessment of property. Adjustment can be represented as a simple formula or it may require additional parameters. Parameter information must be created first before it can be used as a formula. See RPT Parameters on how to create new parameter values.


![alt text][land]

<br />

<b>To create a new adjustment:</b>

1. On the Land Adjustment tab, click on New.

	![alt text][land2]


2. Enter the following information:

	a. <b>Code</b> – a required adjustment code

	b. <b>Name</b> – a required adjustment name


3. On the Applied to the following classifications list, click on the Code column of the first empty row.


4. Look up the classification that this adjustment is applied to. Repeat the process to add all classifications.


5. On the computation formula, enter the formula to compute the adjustment. To use a parameter, double click the parameter from the Parameters list to insert its parameter name. 


6. Click Save to commit the record or  Save  and  Create  to commit the record and create a new one.

<br />
<br />
<br />

## <b>Applied to the following LGUs</b>

<br />

ETRACS now supports cases where different revision settings are applicable to specified LGUs. Inorder for a setting to be useful, the LGUs must be added to the list. Use the Search LGU field to lookup and add and LGU to the list.

![alt text][applied]

<br />
<br />
<br />

## <b>Building Revision Setting</b>

<br />

This is the setting that controls the assessment computation of building property. Included are settings for Assessment Levels, Building Types, Building Adjustments and Computation Options. It is critical that the actual schedule values from the approved ordinance must be followed to avoid unnecessary administrative complications. 

<br />

1. To create a new setting, on the Main Menu explorer, navigate and double-click <b>Settings -> Assessor -> Building Revision Settings</b> item.


2. On the list page, click on  New  to open the New Revision Setting page.

	![alt text][revision]


3. Enter the Revision Year and click   Save . After successfully saving the record, the main screen is displayed. 

<br />
<br />
<br />

## <b>Assessment Levels</b>

<br />

The Assessment Level tab defines all applicable assessment rates for each actual use. The rates are used to compute the assessed value of a property. 

![alt text][assessmentlevel]

Adding a new Assessment Level:

1. Click on the “Code” column of the last empty row.

2. Enter the following information by moving from column to column:

	a. <b>Code</b> – a required assessment level code

	b. <b>Name</b> – a required assessment level name

	c. <b>Fix?</b> – indicates whether the rate is a fixed amount or based on a range of values.

	d. <b>Rate</b> – the assessment level rate expressed as percentage

	e. <b>Classification</b> – a lookup that references one of the standard property classifications 

3. Commit the record by moving the cursor to the next row.

<br />
<br />
<br />

## <b>Assessment Level Ranges</b>

<br />

In cases where the assessment level is not “Fix”, then range entries must be defined. The range is based on graduated market values with corresponding assessment rates.

![alt text][levelrange]

<br />

To enter the assessment level ranges:

1. Click on the MV less than column of an empty row.

2. Enter the upper range value. If this is the last value, enter zero (0) as the max value. The zero value indicates infinite number. Press <b>Enter</b> to commit the entry.

3. Enter the rate in percentage and then press <b>Enter</b>.

4. Move the cursor to the next row to commit the record.

5. Repeat steps 1-4 and enter all ranges.

<br />
<br />
<br />

## <b>Building Types and Building Unit Construction Costs</b>

<br />

Building Type classifies building according to a well-defined characteristic such as structures and construction materials used. A building type is also composed of several kinds of buildings. Each kind of building is associated with a corresponding base unit construction cost. 

![alt text][buildingtype]


<b>Entering Building Types:</b>


1. On the building type list, click on the Code column of the first empty row.

2. Enter the following information:

	a. <b>Code</b> – a required building type code such as I-A

	b. <b>Building Type</b> – a required building type name such as Type I-A

3. After entering the Building Type name, press <b>Enter</b> to commit the item.

4. Repeat steps 1 – 3 to enter all building types.

<br />

<b>Entering Kind of Buildings and Unit Value:</b>


1. Select the Building Type into which to add the different kinds of building and its corresponding unit value.

2. On the Kind of Building and Unit Value tab, select the Base Value Type. The base value type can either be fixed, range or gap.

3. Click on the Bldg Code column in the first empty row of the building kind and unit value list.

4. Lookup the kind of building such as One Family Dwelling

5. If the base value type is <b>fixed</b>, then enter the Base Value otherwise enter the Minimum Base Value and the Maximum Base Value.

6. Move the cursor into the next row to commit the item.

7. Repeat steps 1 - 6 to add all kinds of building and its unit value.

<br />
<br />
<br />

## <b>Multi-Storey Adjustments</b>

<br />

The multi-storey adjustment is used to adjust the base value depending on floor location. The value must be expressed in percentage and it reduces the base value by this percentage. 

![alt text][multistorey]


To add Multi-Storey Adjustment:

1. Select the Multi-Storey Adjustment Tab

2. Click on the Floor No. column of the first empty row.

3. Enter the following information:

4. Floor No. – the floor no. 

5. Rate – the rate applied for the specified floor

6. After entering the rate, press  Enter  to commit the item.

7. Repeat steps 1 – 4 to add all storey adjustments.

<br />
<br />
<br />

## <b>Depreciation Schedules</b>

<br />

The depreciation schedule defines the setting for automatically computing the depreciation of a building. Depreciation is also defined as per building type.


![alt text][depreciation]

To add depreciation:

1. Select the Depreciation Schedule tab.

2. Click on the Age From column of the first empty row.

3. Enter the following information:

	a. Age From – the start year for this range

	b. Age To – the end year for this range

4. Rate – the applicable depreciation rate per year within the range

5. After entering the rate, press  Enter  to commit the item.

6. Repeat steps 1 – 4 to add all depreciation rates.

<br />
<br />
<br />

## <b>Building Adjustments</b>

<br />

Adjustments applicable on a building include items such as Balcony, Toilet and Bath, etc. These adjustments are identified and its computation defined within the local revenue code. 


![alt text][buildingadjustments]

<br />

To add building adjustments:

1. On the Building Adjustments tab, click on New.

	![alt text][buildingnew]


2. Enter the following information:

	a. <b>Code</b> – a required adjustment code

	b. <b>Name</b> – a required adjustment name

	c. <b>Unit</b> – applicable unit for the adjustment


3. On the computation formula, enter the formula to compute the adjustment. To use a parameter, double click the parameter from the Parameters list to insert its parameter name. 

4. Click Save to commit the record or  Save  and  Create  to commit the record and create a new one.

<br />
<br />
<br />

## <b>Computation Options</b>

<br />

This tab defines settings that control the computation behavior of the system. The settings are:

- <b>Predominant Use Computation</b> – if check, the system will calculate the assessed value based on the predominant classification of the building. Otherwise, assessed value is computed per actual use.

- <b>Depreciate Core and Additional Items Separately</b> – if check, the depreciation rate is calculated only against the base market value, therefore excluding the additional items or adjustments. 

- <b>Apply Depreciation automatically</b> – if check, the depreciation is automatically computed based on the depreciation schedule and applied on the computation.

- <b>Calculate Age based on Date Occupied</b> – by default the building age is computed based on the date completed. If this option is checked, then the age is computed based on the date occupied.

- <b>Calculate Depreciation using Straight-Line Formula</b> – if check depreciation is computed using straight line formula.


![alt text][computation]

<br />
<br />
<br />

## <b>Applied to the following LGUs</b>

<br />

ETRACS now supports cases where different revision settings are applicable to specified LGUs. Inorder for a setting to be useful, the LGUs must be added to the list. Use the Search LGU field to lookup and add and LGU to the list.

![alt text][applied2]

<br />
<br />
<br />

# <b>Machine Revision Setting</b>

<br />

This is the setting that controls the assessment computation of machine property. Included are settings for Assessment Levels and Forex Schedule. 

1. To create a new setting, on the Main Menu explorer, navigate and double-click <b>Settings -> Assessor -> Machine Revision Settings</b> item.

2. On the list page, click on  New  to open the New Revision Setting page.

![alt text][newrevision]


3. Enter the Revision Year and click   Save . After successfully saving the record, the main screen is displayed. 

![alt text][machinerevision]

<br />
<br />
<br />

## <b>Assessment Levels</b>

<br />

The Assessment Level tab defines all applicable assessment rates for each actual use. The rates are used to compute the assessed value of a property.

![alt text][assessmentlevels]

1. Click on the “Code” column of the last empty row.

2. Enter the following information by moving from column to column:

	a. <b>Code</b> – a required assessment level code

	b. <b>Name</b> – a required assessment level name

3. Fix? – indicates whether the rate is a fixed amount or based on a range of values.

4. Rate – the assessment level rate expressed as percentage

5. Classification – a lookup that references one of the standard property classifications 

6. Commit the record by moving the cursor to the next row.

<br />
<br />
<br />

## <b>Assessment Level Ranges</b>

<br />

In cases where the assessment level is not “Fix”, then range entries must be defined. The range is based on graduated market values with corresponding assessment rates.

<br />

![alt text][assessmentlevelranges]

1. Click on the MV less than column of an empty row.

2. Enter the upper range value. If this is the last value, enter zero (0) as the max value. The zero value indicates infinite number. Press Enter to commit the entry.

3. Enter the rate in percentage and then press Enter.

4. Move the cursor to the next row to commit the record.

5. Repeat steps 1-4 and enter all ranges.

<br />
<br />
<br />

## <b>Forex Schedules</b>

<br />

The <b>forex</b> or foreign exchange rates are the standard rates published by the Bangko Sentral ng Pilipinas. The rates are used in the conversion factor for imported machineries.

![alt text][forex]

Entering Forex Schedules:

1. Select the Forex Schedule tab.

2. Click on the Year column of the first empty row.

3. Enter the following information:

	a. Year – the applicable year
	
	b. Rate – the foreign exchange rate for the year

4. After entering the Rate, press Enter to commit the item.

5. Repeat steps 1 – 4 to enter exchange rates.

<br />
<br />
<br />

## <b>Applied to the following LGUs</b>

<br />

ETRACS now supports cases where different revision settings are applicable to specified LGUs. Inorder for a setting to be useful, the LGUs must be added to the list. Use the Search LGU field to lookup and add and LGU to the list.

![alt text][appliedlgu]

<br />
<br />
<br />

# <b>Plant/Tree Revision Setting</b>

<br />

This is the setting that controls the assessment computation of plant/tree property. Included are settings for Assessment Levels and Plant/Tree Unit Values.

1. To create a new setting, on the Main Menu explorer, navigate and double-click <b>Settings -> Assessor -> Plant/Tree Revision Settings</b> item.

2. On the list page, click on  New  to open the New Revision Setting page.

3. Enter the Revision Year and click   Save . After successfully saving the record, the main screen is displayed. 

<br />
<br />
<br />

## <b>Plant/Tree Unit Values</b>

<br />

Plants and trees unit values are based on its type or class as defined in the revenue code. 


1. To add a unit value, select the Plant/Tree Unit Value tab

2. Select the Plant/Tree item from the plant/tree list to add unit values 

3. On the plant/tree unit value list, click on the Code column of the first empty row.

4. Enter the following information:

	a. <b>Code</b> – a required plant/tree unit value code

	b. <b>Name</b> – a required plant/tree unit value name

	c. <b>Unit Value</b> – the unit value amount 

<br />
<br />
<br />

## <b>Assessment Levels</b>

<br />

The Assessment Level tab defines all applicable assessment rates for each actual use. The rates are used to compute the assessed value of a property. 

1. To add a new assessment level, click on the “Code” column of the last empty row.

2. Enter the following information by moving from column to column:

	a. <b>Code</b> – a required assessment level code

	b. <b>Name</b> – a required assessment level name
	
	c. <b>Rate</b> – the assessment level rate expressed as percentage

3. After entering the Rate, press Enter to commit the item.

<br />
<br />
<br />

## <b>Applied to the following LGUs</b>

<br />

ETRACS now supports cases where different revision settings are applicable to specified LGUs. Inorder for a setting to be useful, the LGUs must be added to the list. Use the Search LGU field to lookup and add and LGU to the list.

<br />
<br />
<br />

# <b>Miscellaneous Item Revision Setting</b>

<br />

This is the setting that controls the assessment computation of miscellaneous property. Included are settings for Assessment Levels and Miscellaneous Item setting.

1. To create a new setting, on the Main Menu explorer, navigate and double-click <b>Settings -> Assessor -> Miscellaneous Revision Settings</b> item.

2. On the list page, click on  New  to open the New Revision Setting page.

3. Enter the Revision Year and click   Save . After successfully saving the record, the main screen is displayed. 

<br />
<br />
<br />

## <b>Assessment Levels</b>

<br />

The Assessment Level tab defines all applicable assessment rates for each actual use. The rates are used to compute the assessed value of a property. 

1. To add a new level, click on the “Code” column of the last empty row.

2. Enter the following information by moving from column to column:

	a. <b>Code</b> – a required assessment level code

	b. <b>Name</b> – a required assessment level name

	c. <b>Fix?</b> – indicates whether the rate is a fixed amount or based on a range of values.

	d. <b>Rate</b> – the assessment level rate expressed as percentage

	e. <b>Classification</b> – a lookup that references one of the standard property classifications 

3. Commit the record by moving the cursor to the next row.

<br />
<br />
<br />

## <b>Assessment Level Ranges</b>

<br />

In cases where the assessment level is not “Fix”, then range entries must be defined. The range is based on graduated market values with corresponding assessment rates.

1. To add a new range, click on the MV less than column of an empty row.

2. Enter the upper range value. If this is the last value, enter zero (0) as the max value. The zero value indicates infinite number. Press Enter to commit the entry.

3. Enter the rate in percentage and then press Enter.

4. Move the cursor to the next row to commit the record.

5. Repeat steps 1-4 and enter all ranges.

<br />
<br />
<br />

# <b>Miscellaneous Items</b>

<br />

The miscellaneous item tab defines the computation setting for each item. The computation is expressed as a simple formula that is evaluated by the system.

1. To add an item, click on the Code column of the first empty row.

2. Enter the following information:

	a. <b>Code</b> – lookup the miscellaneous item name by entering the code and pressing enter.

	b. <b>Computation Expression</b> – the computation formula to use

3. After entering the Computation Expression, press <b>Enter</b> to commit the item.

<br />
<br />
<br />

## <b>Applied to the following LGUs</b>

<br />

ETRACS now supports cases where different revision settings are applicable to specified LGUs. Inorder for a setting to be useful, the LGUs must be added to the list. Use the Search LGU field to lookup and add and LGU to the list.

<br />
<br />
<br />

# <b>Assessor Transactions</b>

<br />

This chapter discusses the procedure on how to perform the different transactions relevant to the FAAS document. The FAAS is the main output document associated with the real property assessment. The main objective during the assessment process is the classification, appraisal and assessment of real property for taxation purposes as governed by the provisions of RA No.7160 and its implementing rules and regulations and other pertinent laws.

The FAAS and its associated document such as Real Property and Real Property Units have four (4) possible states in the system. These are the following:

- <b>Interim</b> – signifies that the document is still editable and not yet approved. Documents with this state are not considered official and hence cannot be referenced by any of the transactions.

- <b>For Approval</b> – the document is waiting for approval. This state is normally associated with the Data Capture transaction.

- <b>Current</b> – the document has already been approved and can be part of any transaction. An approved FAAS is also posted to the ledger for collection.

- <b>Cancelled</b> – the document has already been cancelled. Cancellation is done only through a transaction.


The state of a document changes only when a transaction is associated and approved against it. Transactions are performed through a workflow processes enforcing proper delineation of responsibility and promoting check and balance for every transaction.

<br />
<br />
<br />

# <b>Data Capture - Land</b>

<br />

When a new system is implemented, the very first operation to be done is to capture existing records into the system. This is the process of encoding the information and performing the necessary transactions to match the current state of the document being captured.


Note: <i>For LGU's with existing computerized real property assessment, migration of data might be possible. However, thorough data analysis must be done to fully evaluate if the existing data has the necessary requirements for the ETRACS system to process it completely and accurately.</i>


When starting from scratch, it is recommended to capture all land properties first before entering the records for buildings, machineries, plants/trees and miscellaneous properties. This is necessary since the encoding of improvements require that the land record is already available.

1. To capture an existing FAAS record, open the Main Menu explorer.

2. Double-click on the <b>Transactions -> Assessor -> Manual Support -> Data Capture</b> item or by accessing the Quick Launcher using the code <b>DC01</b>. This will display the Data Capture FAAS Initial Information screen.

3. Enter the following information:

	a. <b>PIN Type</b> – valid values are new or old. The new pin type format is 000-00-0000-000-00 while the old pin format is 000-00-000-00-000.

	b. <b>Revision Year</b> – the general revision year to capture

	c. <b>Transaction</b> – the type of transaction for the FAS to capture

	d. <b>Property Type</b> – the type of property either land, building, machinery, plant/tree or miscellaneous.

	e. If the property type is land:
		i. Barangay – lookup the barangay of the FAAS to capture
		ii. Section – the section no. of the FAAS to capture
		iii. Parcel – the parcel no. of the FAAS to capture
		iv. Claim No – the claim no (if applicable)

	f. <b>Auto-number</b> – normally uncheck. Used only in cases where capturing is renumbered.

5. Validate that the manual PIN No. matches the generated PIN No.

6. Click  Next  to open the FAAS main screen.

<br />
<br />
<br />

# <b>The FAAS Main Screen</b>

<br />

The main screen captures the basic FAAS information. The information is editable depending on the type of transaction under process. For data capture, all required data must be supplied.

1. Enter the FAAS information based on the manual FAAS record. Make sure that all required data is supplied.

2. Verify that the encoded data are correct.

3. Click on the <b>PIN</b> button to open the real property page shown below:

4. Enter the real property required information namely: cadastral lot no and the boundaries.

5. Click <b>Save</b> and Close  to return to the FAAS main screen.

6. Click on <b>Assessment Detail</b> to open the main RPU screen below:

7. Select the classification of the land from the Classification combo box.

8. Add the land actual use on the land assessment list:

	a. Click on the Subclass column of the first empty row.

	b. Enter the following information:
		i. Subclass – lookup the land subclass to reference. 
		ii. Tax? – must be checked if the item is taxable 
		iii. Actual Use – lookup the actual use to reference. The actual use controls the assessment level to use in the computation.
		iv. Strip – lookup the stripping (if applicable)
		v. Area – enter the area of the item

	c. Verify that the Assessed Value is correct. If the setting <b>faas_datacapture_allow_edit_av</b> is set, then the assessed value can be modified to match the manually computed value. 

	d. Move the active row into the next row to commit the item. 

	e. Repeat steps a-d to add any land item.

9. If land adjustments are specified, click on <b>Land Value Adjustments</b> to open the adjustment screen.

	a. Click on the Code column of the first empty row.

	b. Lookup the adjustment to add and supply any parameters required.

	c. Move the active item to the next row.

	d. Click on <b>OK</b> to close the screen.

10. If there are Actual Use Adjustments, click on  Actual Use Adjustments  to open the adjustment screen.

	a. Click on the Code column of the first empty row.

	b. Lookup the adjustment to add and supply any parameters required.

	c. Move the active item to the next row.

	d. Click on <b>OK</b> to close the screen.

11. Verify that the computations are correct.

12. Click on <b>Save  and  Close</b> to return to the FAAS main screen.

13. Click on <b>Save</b> to commit the FAAS record.

14. Click on <b>Submit</b> to forward the FAAS record for approval.

15. Click on <b>Approve</b> to approve the FAAS record.

<br />
<br />
<br />

# <b>Data Capture - Building</b>

<br />

The capturing of Building FAAS is very similar to Land FAAS with the exception of entering the Real Property Unit assessment detail. 

1. To capture an existing Building FAAS record, open the Main Menu explorer.

2. Double-click on the <b>Transactions -> Assessor -> Manual Support -> Data Capture</b> item or by accessing the Quick Launcher using the code <b>DC01</b>. This will display the Data Capture FAAS Initial Information screen.

3. Enter the following information:

	a. <b>PIN Type</b> – valid values are new or old. The new pin type format is 000-00-0000-000-00 while the old pin format is 000-00-000-00-000.

	b. <b>Revision Year</b> – the general revision year to capture

	c. <b>Transaction</b> – the type of transaction for the FAS to capture

	d. <b>Property Type</b> – select bldg from the list of items.

	e. <b>Land PIN</b> – lookup the Land property where the building resides

	f. <b>Suffix</b> – the suffix no. assigned to the building

	g. <b>Auto-number</b> – normally uncheck. Used only in cases where capturing is renumbered.

4. Validate that the manual PIN No. matches the generated PIN No.

5. Click  Next  to open the FAAS main screen. See the <b><i>FAAS Main Screen section</i></b> for the steps of filling up the FAAS data.

6. Click on <b>Assessment Detail</b> to open the main RPU screen below:

7. On the General Information tab, enter the following information

	a. <b>Building Type</b> – the required type of the building such as Type I-A

	b. <b>Kind of Building</b> – the required kind of building such as One Family Dwelling

	c. <b>Base Value</b> – if the base value type of the selected Kind of Building is range then enter the base value used in the computation.

	d. <b>Building Class</b> – the class of the building

	e. <b>Percent Completed</b> – the rate of completion of the building. This affects the market value computation.

	f. <b>Date Completed</b> – the date the building was completed

	g. <b>Date Occupied</b> – the date the building was occupied

	h. <b>Depreciation</b> – the rate of depreciation to apply incase auto-depreciation is not set.

	i. <b>Classification</b> – the classification of the building

8. Add the building actual use on the actual use list:

	a. Click on the Actual Use column of the first empty row and enter the Actual Use. 

	b. Repeat the process to add all actual uses for the building.

<br />
<br />
<br />

## <b>Adding Floor Information</b>

<br />

Floor information is set for each building's actual use. To add floor information:

1. Select the Actual Use item to add floor information detail.

2. Click on <b>View Floor Information</b> to open the Building Floors screen.

3. Add per floor information by:

	a. Click on the Floor No. column of the first empty row and enter the following information:
		i. <b>Floor No.</b> – the required floor no.
		ii. <b>Area</b> – the area of the floor.

	b. After entering the Area, press <b>Enter</b> to commit the item.

	c. Repeat steps a-b to add all floor information.

<br />
<br />
<br />

## <b>Adding Floor Adjustments</b>

<br />

Adjustments are added on a per floor basis. Each floor can have the same or different types of adjustments associated with it. Example the 1st floor might have a garage and tiled floor while the 2nd floor might have a balcony, tiled floor and glass windows.
	a. To add adjustments, select the Floor item to add adjustments.
	b. Click on the  Floor Detail  to open the Building Additional Items screen.
	c. Click on the Code column of the first empty row.
	d. Lookup the adjustment type by entering its code and pressing <b>Enter</b>.
	e. Enter the value for any parameters required.
	f. Click <b>OK</b> to compute the adjustment.
	g. Repeat steps c-f to add all adjustments.

4. Click on <b>OK</b> to close the Building Floors screen.

5. Verify that the computations are correct.

6. Click on <b>Save</b> and <b>Close</b> to return to the FAAS main screen.

7. Click on <b>Save</b> to commit the FAAS record.

8. Click on <b>Submit</b> to forward the FAAS record for approval.

9. Click on <b>Approve</b> to approve the FAAS record.

<br />
<br />
<br />

# <b>Data Capture - Machinery</b>

<br />

The capturing of Machinery FAAS is very similar to Land FAAS with the exception of entering the Real Property Unit assessment detail.

1. To capture an existing Machine FAAS record, open the Main Menu explorer.

2. Double-click on the <b>Transactions -> Assessor -> Manual Support -> Data Capture</b> item or by accessing the Quick Launcher using the code DC01. This will display the Data Capture FAAS Initial Information screen.

3. Enter the following information:

	a. <b>PIN Type</b> – valid values are new or old. The new pin type format is 000-00-0000-000-00 while the old pin format is 000-00-000-00-000.

	b. <b>Revision Year</b> – the general revision year to capture

	c. <b>Transaction</b> – the type of transaction for the FAS to capture

	d. <b>Property Type</b> – select mach from the list of items.

	e. <b>Land PIN</b> – lookup the Land property where the building resides

	f. <b>Suffix</b> – the suffix no. assigned to the building

	g. <b>Auto-number</b> – normally uncheck. Used only in cases where capturing is renumbered.

4. Validate that the manual PIN No. matches the generated PIN No.

5. Click  Next  to open the FAAS main screen. See the <b>FAAS Main Screen</b> section for the steps of filling up the FAAS data.

6. Click on <b>Assessment Detail</b> to open the main RPU screen below:

7. Select the classification for the machine.

8. Click on the Actual Use column of the first empty row and lookup the actual use by type the code. Repeat the step to add all actual uses.

<br />
<br />
<br />

## <b>Adding Machines</b>

<br />

9. Select an actual use to add machineries.

10. Click on <b>View Machines</b> to open the Machine Actual Use Information screen.

11. Click on  Add to open the Machine Information.

12. Enter the following information:

	a. <b>Machine Code</b> – lookup the machine to add by entering the code 

	b. <b>New Installed</b> – must be checked if the machine is newly installed

	c. <b>Is Imported</b> – must be checked if the machine is imported

	d. <b>Price Index</b> – the price index conversion factor

	e. <b>Brand</b> – the brand of the machine

	f. <b>Model</b> – the model of the machine

	g. <b>Capacity</b> – the capacity of the machine

	h. <b>Serial No.</b> – the serial no. of the machine

	i. <b>Status</b> – additional status information for the machine

	j. <b>Year Acquired</b> – the year the machine was acquired. This is required.

	k. <b>Year Installed</b> – the year the machine was installed. This is required.

	l. <b>Operation Year</b> – the year the machine was operational. This is required.

	m. <b>Estimated Life</b> – the estimated life of the machine

	n. <b>Auto Depreciate</b> – uncheck if you the depreciation is set manually

	o. <b>Original Cost</b> – the original cost of the machine

	p. <b>Other costs such as freight, installation</b> – editable only if the machine is newly installed.

	q. <b>Depreciation (%)</b> – must be set if Auto-Depreciate is unchecked. 

	r. <b>Use Sworn Amount</b> – must be checked the market value to use is the owner’s sworn market value.

	s. <b>Sworn Amount</b> – the owners sworn market value.

13. Click <b>OK</b> to add the machine to the list. 

14. Repeat step 11-13 to add all machines.

15. Click on <b>OK</b> to close the actual use screen.

16. Verify that the computations are correct.

17. Click on <b>Save</b> and  Close</b> to return to the FAAS main screen.

18. Click on <b>Save</b> to commit the FAAS record.

19. Click on <b>Submit</b> to forward the FAAS record for approval.

20. Click on <b>Approve</b> to approve the FAAS record.

<br />
<br />
<br />

# <b>Data Capture - Plant/Tree</b>

<br />

The capturing of Plant/Tree FAAS is very similar to Land FAAS with the exception of entering the Real Property Unit assessment detail. 

1. To capture an existing Plant/Tree FAAS record, open the Main Menu explorer.

2. Double-click on the <b>Transactions -> Assessor -> Manual Support -> Data Capture</b> item or by accessing the Quick Launcher using the code <b>DC01</b>. This will display the Data Capture FAAS Initial Information screen.

3. Enter the following information:

	a. <b>PIN Type</b> – valid values are new or old. The new pin type format is 000-00-0000-000-00 while the old pin format is 000-00-000-00-000.

	b. <b>Revision Year</b> – the general revision year to capture

	c. <b>Transaction</b> – the type of transaction for the FAS to capture

	d. <b>Property Type</b> – select planttree from the list of items.

	e. <b>Land PIN</b> – lookup the Land property where the building resides

	f. <b>Suffix</b> – the suffix no. assigned to the building

	g. <b>Auto-number</b> – normally uncheck. Used only in cases where capturing is renumbered.

4. Validate that the manual PIN No. matches the generated PIN No.

5. Click  Next  to open the FAAS main screen. See the <b><i>FAAS Main Screen</i></b> section for the steps of filling up the FAAS data.

6. Click on <b>Assessment Detail</b> to open the main RPU screen below:

7. Select the classification for the machine.

8. Click on the Code column of the first empty row and enter the following information:

	a. <b>Code</b> – lookup the plant/tree by entering the code and press <b>Enter</b>.

	b. <b>Actual Use</b> – the actual use of this item

	c. <b>Productive</b> – the number of productive plant/trees

	d. <b>Non-Productive</b> – the number of non-productive plant/trees

9. Press <b>Enter</b> or move the active item to the next row to commit the item.

10. Repeat steps 8-9 to add all plant/trees

11. Verify that the computations are correct.

12. Click on <b>Save</b> and <b>Close</b> to return to the FAAS main screen.

13. Click on <b>Save</b> to commit the FAAS record.

14. Click on <b>Submit</b> to forward the FAAS record for approval.

15. Click on <b>Approve</b> to approve the FAAS record.

<br />
<br />
<br />

# <b>Data Capture - Miscellaneous</b>

<br />

The capturing of Miscellaneous FAAS is very similar to Land FAAS with the exception of entering the Real Property Unit assessment detail.

1. To capture an existing Miscellaneous FAAS record, open the Main Menu explorer.

2. Double-click on the <b>Transactions -> Assessor -> Manual Support -> Data Capture</b> item or by accessing the Quick Launcher using the code <b>DC01</b>. This will display the Data Capture FAAS Initial Information screen.

3. Enter the following information:

	a. <b>PIN Type</b> – valid values are new or old. The new pin type format is 000-00-0000-000-00 while the old pin format is 000-00-000-00-000.

	b. <b>Revision Year</b> – the general revision year to capture

	c. <b>Transaction</b> – the type of transaction for the FAS to capture

	d. <b>Property Type</b> – select misc from the list of items.

	e. <b>Land PIN</b> – lookup the Land property where the building resides

	f. <b>Suffix</b> – the suffix no. assigned to the building

	g. <b>Auto-number</b> – normally uncheck. Used only in cases where capturing is renumbered.

4. Validate that the manual PIN No. matches the generated PIN No.

5. Click  Next  to open the FAAS main screen. See the <b><i>FAAS</i></b> Main Screen section for the steps of filling up the FAAS data.

6. Click on <b>Assessment Detail</b> to open the main RPU screen below:

7. Select the Classification.

8. Select the Actual Use.

9. Click on the Code column of the first empty row and enter the following information:

	a. <b>Code</b> – lookup the miscellaneous item by entering the code and press <b>Enter</b>. Supply data to any required parameters.

	b. <b>Depreciation Rate</b> – the applied depreciation rate.

10. After entering the depreciation rate, press <b>Enter</b> or move the active item to the next row to commit the item.

11. Repeat steps 9-10 to add all miscellaneous properties.

12. Verify that the computations are correct.

13. Click on <b>Save</b> and <b>Close</b> to return to the FAAS main screen.

14. Click on <b>Save</b> to commit the FAAS record.

15. Click on <b>Submit</b> to forward the FAAS record for approval.

16. Click on <b>Approve</b> to approve the FAAS record.

<br />
<br />
<br />

# <b>Basic Workflow Processes</b>

<br />

The basic workflow processes are shown below. It starts with the <b>Receiver/Examiner</b> accepting the documents required for the transaction. The required documents are then verified and validated. A FAAS record is then created with all support documents added. The record is then forwarded for examination. The <b>Examiner</b> schedules the property for examination and performs ocular inspection. The ocular inspection finding is then reflected. The record is then forwarded to <b>Taxmapper</b> where it is a tax map and approved by the <b>Taxmapper Chief/Head</b>. The FAAS is then appraised by the <b>Appraiser</b>. After verification by the Appraisal Chief/Head, the record is forwarded to the <b>Assistant Assessor</b> for approval. The record is then approved and submitted to the <b>Assessor</b> who then approves the record. The approved FAAS is forwarded to the <b>Records</b> section and the support documents are attached digitally by scanning or photograph.

<br />
<br />
<br />

# <b>Supported Online Transactions</b>

<br />

The supported online transactions are: 

1. To process an online transaction such as Transfer of Ownership, double-click on the <b>Transactions -> Assessor -> Online -> Transfer of Ownership</b> item. This will display the Transaction Initial Information screen.

2. Search the Property to process and then click <b>Next</b> to validate and create the FAAS record and display the main workflow screen.

	The main screen is divided into two parts, namely: 
	- Section Pane – the section pane displays an information category or section such as General Info, Requirements and etc. The section list varies depending on the type of transaction and permission of the user. Most sections are displayed. A section data is editable if the user has permission to modify the data.

	- View Pane – the view pane is located directly to the right of the section pane. It displays the user interface for the selected section.

3. Click on the Section assigned to you and modify the data as needed.

4. Click on  Submit  to forward the record to the next workflow process.

<br />
<br />
<br />

# <b>Assigning a Workflow Process</b>

<br />

The workflow process has built-in notification system (for member LGU only) that notifies the respective users when a new transaction is available for processing as shown below:

The notified user then accepts the record by clicking on the  Assign To Me  button. Once assigned, the system tracks the record until it is forwarded to the next workflow step. These steps are repeated until the record is approved.

<br />
<br />
<br />

## <b>Subdivision</b>

<br />

Subdivision is the process of dividing an area of land into two or more lots. Before performing the subdivision transaction the required documents must be completed and verified such as the approved subdivision plan, authority to sell from HLURB, certified true copies of TCT, realty tax clearances, etc. The property to be subdivided must be fully paid and has no pending obligations to the LGU. The subdivision can only be approved if the mother land's area is equal to the total land area of the subdivided lots. The system does not allow partial subdivisions. This eliminates inaccurate status between the motherland and the subdivided lots. 

During subdivision, all improvements will be manually assigned to one of the newly subdivided lots in the subdivision. This avoids the problem of an improvement still referencing a cancelled or retired land. Upon approval, the tax declarations and real property unit records of these land improvements be cancelled and new ones will be created and issued to it.

<br />
<br />
<br />

## <b>Initial Information</b>

<br />

To process a subdivision transaction:

1. Double-click on the <b>Transactions -> Assessor -> Online -> Subdivision</b> item or use the Quick Launcher using the code <b>SD01</b>. This displays the Subdivision Initial screen.

2. Search the Land property to be subdivided.

3. Enter the default memoranda. The default memoranda will be automatically provided for all subdivided lands and affected improvements.

4. Click <b>Next</b> to validate and create the subdivision and display the main workflow screen.

5. Follow the normal transaction workflow as depicted in <b>Error! Reference source not found..</b>

<br />
<br />
<br />

## <b>Creating Subdivided Lands</b>

<br />

The creation of subdivided lands shall be performed by the Taxmapper. To create subdivided lands:

6. Select the Subdivided Land PINs section to display the Subdivided Land PIN Information screen below.

7. Click on  Add  to open the Real Property screen.

8. Enter the required information:

	a. <b>Section No.</b> – the required section no.

	b. <b>Parcel No.</b> – the required parcel no.

	c. <b>Cadastral Lot No.</b> – the required cadastral lot no.

	d. <b>North, East, South and West</b> – the boundary information

9. Click  Save  to commit the changes.

10. Repeat steps 7-9, to add all subdivided lands.






























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
[settings1]: ./images/9-t.png
[settings2]: ./images/9-u.png
[settings3]: ./images/9-v.png
[arrow]: ./images/arrow.png
[editsettings]: ./images/w.png
[revision]: ./images/9-x.png
[revision2]: ./images/9-y.png
[assessment]: ./images/9-z.png
[range]: ./images/9-z1.png
[class]: ./images/9-z2.png
[strippings]: ./images/9-z3.png
[land]: ./images/9-z4.png
[land2]: ./images/9-z5.png
[applied]: ./images/9-z6.png
[revision]: ./images/9-z7.png
[assessmentlevel]: ./images/9-z8.png
[levelrange]: ./images/9-z9.png
[buildingtype]: ./images/9-z10.png
[multistorey]: ./images/9-z11.png
[depreciation]: ./images/9-z12.png
[buildingadjustments]: ./images/9-z13.png
[buildingnew]: ./images/9-z14.png
[computation]: ./images/9-z15.png
[applied2]: ./images/9-z16.png
[newrevision]: ./images/9-z17.png
[machinerevision]: ./images/9-z18.png
[assessmentlevels]: ./images/9-z19.png
[assessmentlevelranges]: ./images/9-z20.png
[forex]: ./images/9-z21.png




