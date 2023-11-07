### Building Revision Setting

This is the setting that controls the assessment computation of building
property. Included are settings for Assessment Levels, Building Types,
Building Adjustments and Computation Options. It is critical that the
actual schedule values from the approve ordinance must be followed to
avoid unnecessary administrative complications.

1.  To create a new setting, on the Main Menu explorer, navigate and
    double-click **Settings -&gt; Assessor -&gt; Building Revision
    Settings** item.

2.  On the list page, click on `New` to open the New Revision Setting
    page.

> ![image|512x397,100%](images\image171.png)
<!-- > <img src="images\image171.png" style="width:1.981in;height:0.77511in" /> -->

3.  Enter the Revision Year and click `Save` . After successfully saving
    the record, the main screen is displayed.

![image|512x397,100%](images\image172.png)
<!-- <img src="images\image172.png" style="width:5.08196in;height:3.30584in" /> -->

#### Assessment Levels

The Assessment Level tab defines all applicable assessment rates for
each actual use. The rates are used to compute the assessed value of a
property.

![image|512x397,100%](images\image173.png)
<!-- <img src="images\image173.png" style="width:2.81215in;height:2.52468in" /> -->

Adding a new Assessment Level:

1.  Click on the “Code” column of the last empty row.

2.  Enter the following information **by moving from column to column**:

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

To enter the assessment level ranges:

1.  Click on the MV less than column of an empty row.

2.  Enter the upper range value. If this is the last value, enter
    zero (0) as the max value. The zero value indicates infinite number.
    Pres **Enter** to commit the entry.

3.  Enter the rate in percentage and then press **Enter**.

4.  Move the cursor to the next row to commit the record.

5.  Repeat steps 1-4 and enter all ranges.

#### Building Types and Building Unit Construction Costs

Building Type classifies building according to a well-defined
characteristic such as structures and construction materials used. A
building type is also composed of several kinds of building. Each kind
of building is associated with a corresponding base unit construction
cost.

![image|512x397,100%](images\image174.png)
<!-- <img src="images\image174.png" style="width:5.07437in;height:2.7684in" /> -->

**Entering Building Types:**

1.  On the building type list, click on the Code column of the first
    empty row.

2.  Enter the following information:

    1.  **Code** – a required building type code such as I-A

    2.  **Building Type** – a required building type name such as Type
        I-A

3.  After entering the Building Type name, press **Enter** to commit the
    item.

4.  Repeat steps 1 – 3 to enter all building types.

**Entering Kind of Buildings and Unit Value:**

1.  Select the Building Type into which to add the different kinds of
    building and its corresponding unit value.

2.  On the Kind of Building and Unit Value tab, select the Base Value
    Type. The base value type can either be fix, range or gap.

3.  Click on the Bldg Code column in the first empty row of the building
    kind and unit value list.

4.  Lookup the kind of building such as One Family Dwelling

5.  If the base value type is **fix**, then enter the Base Value
    otherwise enter the Minimum Base Value and the Maximum Base Value.

6.  Move the cursor into the next row to commit the item.

7.  Repeat steps 1 - 6 to add all kinds of building and its unit value.

#### Multi-Storey Adjustments

The multi-storey adjustment is use to adjust the base value depending on
floor location. The value must be expressed in percentage and it reduces
the base value by this percentage.

![image|512x397,100%](images\image175.png)
<!-- <img src="images\image175.png" style="width:2.03725in;height:1.26268in" /> -->

To add Multi-Storey Adjustment:

1.  Select the Multi-Storey Adjustment Tab

2.  Click on the Floor No. column of the first empty row.

3.  Enter the following information:

    1.  Floor No. – the floor no.

    2.  Rate – the rate applied for the specified floor

4.  After entering the rate, press `Enter` to commit the item.

5.  Repeat steps 1 – 4 to add all storey adjustments.

#### Depreciation Schedules

The depreciation schedule defines the setting for automatically
computing the depreciation of a building. Depreciation is also defined
as per building type.

![image|512x397,100%](images\image176.png)
<!-- <img src="images\image176.png" style="width:2.69966in;height:1.36858in" /> -->

To add depreciation:

1.  Select the Depreciation Schedule tab.

2.  Click on the Age From column of the first empty row.

3.  Enter the following information:

    1.  Age From – the start year for this range

    2.  Age To – the end year for this range

    3.  Rate – the applicable depreciation rate per year within the
        range

4.  After entering the rate, press `Enter` to commit the item.

5.  Repeat steps 1 – 4 to add all depreciation rates.

#### Building Adjustments 

Adjustments applicable on a building include items such as Balcony,
Toilet and Bath and etc. These adjustments are identified and its
computation defined within the local revenue code.

![image|512x397,100%](images\image177.png)
<!-- <img src="images\image177.png" style="width:5.0007in;height:1.44395in" /> -->

To add building adjustments:

1.  On the Building Adjustments tab, click on `New` .

![image|512x397,100%](images\image178.png)
<!-- > <img src="images\image178.png" style="width:3.29421in;height:3.19335in" /> -->

2.  Enter the following information:

    1.  **Code** – a required adjustment code

    2.  **Name** – a required adjustment name

    3.  **Unit** – applicable unit for the adjustment

3.  On the computation formula, enter the formula to compute the
    adjustment. To use a parameter, double click the parameter from the
    Parameters list to insert its parameter name.

4.  Click Save to commit the record or `Save and Create` to commit the
    record and create a new one.

#### Computation Options

This tab defines settings that control the computation behavior of the
system. The settings are:

-   **Pre-Dominant Use Computation** – if check, the system will
    calculate the assessed value based on the pre-dominant
    classification of the building. Otherwise, assessed value is
    computed per actual use.

-   **Depreciate Core and Additional Items Separately** – if check, the
    depreciation rate is calculated only against the base market value,
    therefore excluding the additional items or adjustments.

-   **Apply Depreciation automatically** – if check, the depreciation is
    automatically computed based on the depreciation schedule and
    applied on the computation.

-   **Calculate Age based on Date Occupied** – by default the building
    age is computed based on the date completed. If this option is
    checked, then the age is computed based on the date occupied.

-   **Calculate Depreciation using Straight**-**Line Formula** – if
    check depreciation is computed using straight line formula.

![image|512x397,100%](images\image179.png)
<!-- <img src="images\image179.png" style="width:2.71841in;height:1.26268in" /> -->

#### Applied to the following LGUs

ETRACS now supports cases where different revision settings are
applicable to specified LGUs. Inorder for a setting to be useful, the
LGUs must be added to the list. Use the Search LGU field to lookup and
add and LGU to the list.

![image|512x397,100%](images\image170.png)
<!-- <img src="images\image170.png" style="width:2.4941in;height:2.34971in" /> -->