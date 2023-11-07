## Managing General Revision Settings

The General Revision Settings are essential in the proper computation of
real property assessments. The setting includes the Schedule of Fair
Market Value and applicable adjustments. The SFMV must be approved by
the Local Government before it must be adopted for implementation. An
associated revision setting must be created for every General Revision
implemented and mandated by the LGU.

### Land Revision Setting

This is the setting that controls the assessment computation of land
property. Included are settings for Assessment Levels, Land
Classification and Unit Values, Land Adjustments and Land Actual Use
Adjustments. It is imperative that the actual schedule values from the
approve ordinance must be followed to avoid unnecessary administrative
complications.

1.  On the Main Menu explorer, navigate and double-click **Settings
    -&gt; Assessor -&gt; Land Revision Settings** item.

2.  On the list page, click on `New` to open the New Revision Setting
    page.

> ![image|512x397,100%](images\image162.png)
<!-- > <img src="images\image162.png" style="width:1.87526in;height:1.16891in" /> -->

3.  Enter the Revision Year and click `Save` . After successfully saving
    the record, the main screen is displayed. The main screen is
    categorized into several tabs. The tabs are the Assessment Level,
    Land Classification and Unit Values (LCUV), Land Adjustments and
    Applied to the following LGUs as shown below.

> ![image|512x397,100%](images\image163.png)
<!-- > <img src="images\image163.png" style="width:5.00979in;height:3.12461in" /> -->

#### Assessment Levels

The Assessment Level tab defines all applicable assessment rates for
each actual use. The rates are used to compute the assessed value of a
property.

> ![image|512x397,100%](images\image164.png)
<!-- > <img src="images\image164.png" style="width:2.56286in;height:3.07543in" /> -->

1.  To add a new assessment level, click on the “Code” column of the
    last empty row.

2.  Enter the following information by moving from column to column:

    1.  **Code** – a required assessment level code

    2.  **Name** – a required assessment level name

    3.  **Fix?** – indicates whether the rate is a fix amount or based
        on a range of values.

    4.  **Rate** – the assessment level rate expressed as percentage

    5.  **Classification** – a lookup that references one of the
        standard property classifications

3.  Commit the record by moving the cursor to the next row.

#### Assessment Level Ranges

In cases where the assessment level is not “Fix”, then range entries
must be defined. The range is based on graduated market values with
corresponding assessment rates.

![image|512x397,100%](images\image165.png)
<!-- <img src="images\image165.png" style="width:3.34333in;height:1.46896in" /> -->

1.  To enter a new range, click on the MV less than column of an empty
    row.

2.  Enter the upper range value. If this is the last value, enter
    zero (0) as the max value. The zero value indicates infinite number.
    Pres **Enter** to commit the entry.

3.  Enter the rate in percentage and then press **Enter**.

4.  Move the cursor to the next row to commit the record.

5.  Repeat steps 1-4 and enter all ranges.

#### Land Classification and Unit Values (LCUV) 

The LCUV is the setting that defines the market values for each
classification of land. The market values must be taken from the
approved schedule as mandated by the local revenue code. The LCUV is
divided into two main categories, namely: the specific classes and the
subclasses. Specific class is a specific “grouping” of land types per
classification. Examples include Banana Land and Coconut Land for the
agricultural classification. The Sub-Class defines the different class
rating of the specific land such as 1<sup>st</sup> class, 2<sup>nd</sup>
class and etc.

![image|512x397,100%](images\image166.png)
<!-- <img src="images\image166.png" style="width:5.02021in;height:2.5889in" /> -->

#### Specific Classes

1.  Select the type of classification from the Classification combo box.

2.  On the specific class list, click on the Code column of the first
    empty row.

3.  Enter the following information:

    1.  **Code** – required specific class code

    2.  **Name** – required specific class name

    3.  **Area Type**- the type of area for this specific class. The
        valid values are HA and SQM.

4.  After entering the Area Type, press **Enter** to commit the item.

5.  Repeat steps 1 – 4 to enter all specific classes.

#### Sub-Classes

1.  Select a Specific Class you want to add sub-classes.

2.  On the Sub Class list, click on the Code column of the first empty
    row.

3.  Enter the following information:

    1.  **Code** – required subclass code

    2.  **Name** – required subclass name

    3.  **Unit Value** – the approved unit value for this class.

4.  After entering the Unit Value, press **Enter** to commit the item.

5.  Repeat steps 1 - 4 to add all sub-classes.

#### Strippings 

Stripping levels can also be associated on a classification. Stripping
normally reduces the applicable unit value of the property thereby
reducing the computed market value.

![image|512x397,100%](images\image167.png)
<!-- <img src="images\image167.png" style="width:2.45594in;height:3.11211in" /> -->

To define stripping levels for a classification

1.  Select the classification to add stripping from the Classification
    combo box.

2.  On the Stripping list, click on the Strip Level column of the first
    empty row.

3.  Enter the following information:

    1.  **Stripping Level** – the strip level no.

    2.  **Rate (%)** – the stripping rate in percentage.

4.  After entering the Rate, press Enter to commit the item.

5.  Repeat steps 1 – 4 to add all stripping levels.

#### Land Adjustments

The land adjustments are additional adjustments applicable to the
assessment of property. Adjustment can be represented as a simple
formula or it may require additional parameters. A parameter information
must be created first before it can be used as a formula. See RPT
Parameters on how to create new parameter values.

![image|512x397,100%](images\image168.png)
<!-- <img src="images\image168.png" style="width:4.75691in;height:1.48146in" /> -->

**To create a new adjustment**:

1.  On the Land Adjustment tab, click on `New` .

> ![image|512x397,100%](images\image169.png)
<!-- > <img src="images\image169.png" style="width:3.18795in;height:3.50581in" /> -->

2.  Enter the following information:

    1.  **Code** – a required adjustment code

    2.  **Name** – a required adjustment name

3.  On the Applied to the following classifications list, click on the
    Code column of the first empty row.

4.  Lookup the classification that this adjustment is applied to. Repeat
    the process to add all classifications.

5.  On the computation formula, enter the formula to compute the
    adjustment. To use a parameter, double click the parameter from the
    Parameters list to insert its parameter name.

6.  Click Save to commit the record or `Save and Create` to commit the
    record and create a new one.

#### Applied to the following LGUs

ETRACS now supports cases where different revision settings are
applicable to specified LGUs. Inorder for a setting to be useful, the
LGUs must be added to the list. Use the Search LGU field to lookup and
add and LGU to the list.

![image|512x397,100%](images\image170.png)
<!-- <img src="images\image170.png" style="width:2.4941in;height:2.34971in" /> -->