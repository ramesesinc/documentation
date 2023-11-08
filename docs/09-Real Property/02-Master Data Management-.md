## Master Data Management

The Real Property Assessment module requires a number of master files.
These master files must be setup before performing any transaction. It
ranges from simple list of items to settings that require the user to be
familiar with the schedules of market values, adjustments, computations
and formula definition used during assessment. In order to avoid
unnecessary setup issues and problems, the order of which the master
files are created must be followed accordingly as described in the
succeeding sections.

### Property Classifications

Classification is the process of identifying and classifying properties
in accordance to shared qualities or characteristics. The standard
property classifications follow the RACIMTS guideline shown in **Error!
Reference source not found.**. These are normally loaded into the system
by default. However, new classification can still be added if necessary.

| **Code** | **Classification**   |
|----------|----------------------|
| R        | Residential          |
| A        | Agricultural         |
| C        | Commercial           |
| I        | Industrial           |
| M        | Mineral              |
| T        | Timberland           |
| S        | Special              |
| SH       | Special – Hospital   |
| SS       | Special – Scientific |
| SC       | Special – Cultural   |
| SG       | Special - GOCC       |

### 

1.  To create a new record, enter PC01 on the Quick Launcher box and
    press **ENTER** or open the list view and click `New` from the toolbar
    to open the new page.

![image|512x397,100%](images\image145.png)
<!-- <img src="images\image145.png" style="width:2.49969in;height:1.15641in" /> -->

2.  Enter the required information:

    1.  **Code** – the assigned classification code

    2.  **Classification** – the complete classification name

    3.  **Is Special?** – check if the classification is special such as
        Hospital, Cultural, etc.

    4.  **Order No.** – represents the order in which it is displayed

3.  Click on `Save` or press `Ctrl+S` to commit the changes.

### Exemption Types

Exemptions are granted to real properties either under constitutional
provisions, statutory provisions and any other applicable guidelines.
The standard applicable exemptions are shown in **Error! Reference
source not found.**. These exemptions are automatically loaded by
default.

| **Code** | **Exemption Type** |
|----------|--------------------|
| GO       | Government         |
| RE       | Religious          |
| CH       | Charitable         |
| ED       | Educational        |
| OT       | Others             |

### 

1.  To create a new record, enter ET01 on the Quick Launcher box and
    press **ENTER** or open the list view and click New from the toolbar
    to open the new page.

![image|512x397,100%](images\image146.png)
<!-- <img src="images\image146.png" style="width:2.41845in;height:0.95013in" /> -->

2.  Enter the required information:

    1.  **Code** – the assigned exemption code

    2.  **Name** – the complete exemption name

    3.  **Order No.** – represents the order in which it is displayed

3.  Click on `Save` or press `Ctrl+S` to commit the changes.

### Reason for Cancellation of FAAS

This is the reason for cancelling a FAAS record. The corresponding FAAS
of a property is sometimes cancelled due to some extra-ordinary
circumstances such as demolition, destruction or even duplication of
entry due from manual processes. Below are common reasons for
cancellation.

| **Code** | **Reason**                    |
|----------|-------------------------------|
| TD       | Total Demolition              |
| TF       | Total Destruction due to Fire |
| DE       | Double Entry                  |

1.  To create a new record, enter CTF01 on the Quick Launcher box and
    press **ENTER** or open the list view and click `New` from the toolbar
    to open the new page.

![image|512x397,100%](images\image147.png)
<!-- <img src="images\image147.png" style="width:2.69413in;height:0.97514in" /> -->

2.  Enter the required information:

    1.  **Code** – the assigned code

    2.  **Title** – the complete title information

    3.  **Description** – a brief description of the record

3.  Click on `Save` or press `Ctrl+S` to commit the changes.

### Kind of Buildings

Buildings are structures with foundation, roof, walls and other
structural features that are suitable for appraisal and assessment. They
are considered immovable provided they are more or less of a permanent
structure, substantially adhered to the land, and not mere
superimpositions on the land. This includes building such as One-Family
Dwelling, Two-Family Dwelling, Hotel and etc.

------------------------------
***Important!!!***

To avoid ambiguity in any printed reports, each kind of building must be
encoded separately into the system.
------------------------------

1.  To create a new record, enter KB01 on the Quick Launcher box and
    press **ENTER** or open the list view and click `New` from the toolbar
    to open the new page.

![image|512x397,100%](images\image148.png)
<!-- <img src="images\image148.png" style="width:2.66217in;height:0.89387in" /> -->

2.  Enter the required information:

    1.  **Code** – the assigned code

    2.  **Kind of Building** – the kind of building name

3.  Click on `Save` or press `Ctrl+S` to commit the changes.

### Materials

The different materials used in the construction of a building such as
reinforced concrete and wood. Materials are referenced when defining the
“Building Type” of a particular building such as Type IA – Reinforced
Concrete and during assessment of building properties.

1.  To create a new record, enter MAT01 on the Quick Launcher box and
    press **ENTER** or open the list view and click `New` from the toolbar
    to open the new page.

![image|512x397,100%](images\image149.png)
<!-- <img src="images\image149.png" style="width:2.59343in;height:0.86887in" /> -->

2.  Enter the required information:

    1.  **Code** – the assigned code

    2.  **Material** – the material name

Click on `Save` or press `Ctrl+S` to commit the changes.

### Structures

The different structures used in the construction of a building such as
foundation and partition. Structures are referenced when creating
“Building Type” such as Type IA – Reinforced Concrete.

1.  To create a new record, enter ST01 on the Quick Launcher box and
    press **ENTER** or open the list view and click `New` from the toolbar
    to open the new page.

![image|512x397,100%](images\image150.png)
<!-- <img src="images\image150.png" style="width:2.78715in;height:3.52549in" /> -->

2.  Enter the required information:

    1.  **Code** – the assigned code

    2.  **Structure** – the structure name

    3.  **Index No.** – the position of the structure in the FAAS
        printout

3.  **Applicable Materials** – lookup the materials applicable for the
    structure.

    1.  On the Code column, enter few characters of the material to
        search and press **ENTER**.

    2.  Repeat the process for each material to add.

4.  Click on `Save` or press `Ctrl+S` to commit the changes.

### Machines

Machinery is a general classification of property other than real
estate. Machinery includes installation and support facilities for
processing or manufacturing of products, from raw materials to finished
goods.

1.  To create a new record, enter MACH01 on the Quick Launcher box and
    press **ENTER** or open the list view and click `New` from the toolbar
    to open the new page.

![image|512x397,100%](images\image151.png)
<!-- <img src="images\image151.png" style="width:2.31282in;height:0.84387in" /> -->

2.  Enter the required information:

    1.  **Code** – the assigned code

    2.  **Machine** – the machine name

3.  Click on `Save` or press `Ctrl+S` to commit the changes.

### Plants and Trees

Trees are woody plant with single trunk and growing to a considerable
height. They also have lateral branches up from the ground. It includes
the like of Coconut and Mango trees. A plant is a kind that is
exemplified by trees which includes Banana and Nipa Plant.

1.  To create a new record, enter PT01 on the Quick Launcher box and
    press **ENTER** or open the list view and click `New` from the toolbar
    to open the new page.

![image|512x397,100%](images\image152.png)
<!-- <img src="images\image152.png" style="width:2.5191in;height:0.90614in" /> -->

2.  Enter the required information:

    1.  **Code** – the assigned code

    2.  **Plant/Tree** – the plant or tree name

Click on `Save` or press `Ctrl+S` to commit the changes.

### Miscellaneous Items

Miscellaneous Item is a property that cannot be classified as land,
building, machinery o plant and tree.

This includes perimeter fence, covered walk or communication tower.

1.  To create a new record, enter MISC01 on the Quick Launcher box and
    press **ENTER** or open the list view and click `New` from the toolbar
    to open the new page.

![image|512x397,100%](images\image153.png)
<!-- <img src="images\image153.png" style="width:2.57536in;height:0.84989in" /> -->

2.  Enter the required information:

    1.  **Code** – the assigned code

    2.  **Miscellaneous Item** – the miscellaneous item name

3.  Click on `Save` or press `Ctrl+S` to commit the changes.

### Parameters

Parameters are user-defined data that can be used by the application
either to collect dynamic information or directly used in a computation.
An example of parameters is distance in km, height or width.

1.  To create a new record, enter RPAR01 on the Quick Launcher box and
    press **ENTER** or open the list view and click `New` from the toolbar
    to open the new page.

![image|512x397,100%](images\image154.png)
<!-- <img src="images\image154.png" style="width:2.18098in;height:1.9685in" /> -->

2.  Enter the required information:

    1.  **Name** – the name of the parameter. Name must start with a
        letter and be followed by alphanumeric characters. It must not
        contain any spaces. Use the underscore “\_” character to
        separate multiple words.

    2.  **Caption** – the caption displayed in the user interface or
        reports

    3.  **Description** – a brief information describing the parameter

    4.  **Data Type** – the data represented by this parameter. Valid
        types are decimal, integer, range\_decimal and range\_integer.
        The range\_integer and range\_decimal values are used when a
        parameter requires a value that should be within a range of
        values. If the range\_decimal or range\_integer types are
        selected, enter the Minimum and Maximum values. The minimum
        value must be less than the maximum value.

3.  Click on `Save` or press `Ctrl+S` to commit the changes.

### Requirement Types

The type of requirements needed or required when processing a
transaction such as Realty Tax Clearance, Deed of Absolute Sale and etc.

1.  To create a new record, enter REQ01 on the Quick Launcher box and
    press **ENTER** or open the list view and click `New` from the toolbar
    to open the new page.

![image|512x397,100%](images\image155.png)
<!-- <img src="images\image155.png" style="width:2.34971in;height:1.40607in" /> -->

2.  Enter the required information:

    1.  **Requirement Type** – the requirement type name

    2.  **Description** – a brief description of the requirement

    3.  **Handler** – the screen that would handle this requirement. The
        “default” handler is currently the only supported value.

    4.  **Sort Order** – the priority at which the requirement is
        displayed

Click on `Save` or press `Ctrl+S` to commit the changes.