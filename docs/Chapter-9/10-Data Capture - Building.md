### Data Capture - Building

The capturing of Building FAAS is very similar to Land FAAS with the
exception of entering the Real Property Unit assessment detail.

1.  To capture an existing Building FAAS record, open the Main Menu
    explorer.

2.  Double-click on the **Transactions -&gt; Assessor -&gt; Manual
    Support -&gt; Data Capture** item or by accessing the Quick Launcher
    using the code **DC01**. This will display the Data Capture FAAS
    Initial Information screen.

> ![image|512x397,100%](images\image193.png)
<!-- > <img src="images\image193.png" style="width:2.28097in;height:2.60592in" /> -->

3.  Enter the following information:

    1.  **PIN Type** – valid values are **new** or **old**. The new pin
        type format is 000-00-0000-000-00 while the old pin format is
        000-00-000-00-000.

    2.  **Revision Year** – the general revision year to capture

    3.  **Transaction** – the type of transaction for the FAS to capture

    4.  **Property Type** – select bldg from the list of items.

    5.  **Land PIN** – lookup the Land property where the building
        resides

    6.  **Suffix** – the suffix no. assigned to the building

    7.  **Auto-number** – normally uncheck. Used only in cases where
        capturing is renumbered.

4.  Validate that the manual PIN No. matches the generated PIN No.

5.  Click `Next` to open the FAAS main screen. See the ***FAAS Main
    Screen*** section for the steps of filling up the FAAS data.

6.  Click on `Assessment Detail` to open the main RPU screen below:

> ![image|512x397,100%](images\image194.png)
<!-- > <img src="images\image194.png" style="width:5.10353in;height:3.42756in" /> -->

7.  On the General Information tab, enter the following information

    1.  **Building Type** – the required type of the building such as
        Type I-A

    2.  **Kind of Building** – the required kind of building such as One
        Family Dwelling

    3.  **Base Value** – if the base value type of the selected Kind of
        Building is range then enter the base value used in the
        computation.

    4.  **Building Class** – the class of the building

    5.  **Percent Completed** – the rate of completion of the building.
        This affects the market value computation.

    6.  **Date Completed** – the date the building was completed

    7.  **Date Occupied** – the date the building was occupied

    8.  **Depreciation** – the rate of depreciation to apply incase
        auto-depreciation is not set.

    9.  **Classification** – the classification of the building

8.  Add the building actual use on the actual use list:

    1.  Click on the Actual Use column of the first empty row and enter
        the Actual Use.

    2.  Repeat the process to add all actual uses for the building.

#### Adding Floor Information

> Floor information is set for each building actual use. To add floor
> information:

1.  Select the Actual Use item to add floor information detail.

2.  Click on `View Floor Information` to open the Building Floors
    screen.

> ![image|512x397,100%](images\image195.png)
<!-- > <img src="images\image195.png" style="width:3.33797in;height:2.35658in" /> -->

3.  Add per floor information by:

    a.  Click on the Floor No. column of the first empty row and enter
        the following information:

        i.  Floor No. – the required floor no.
        ii.  Area – the area of the floor.

    b.  After entering the Area, press **Enter** to commit the item.

    c.  Repeat steps a-b to add all floor information.

#### Adding Floor Adjustments

> Adjustments are added on a per floor basis. Each floor can have the
> same or different types of adjustments associated in it. Example the
> 1<sup>st</sup> floor might have a garage and tiled floor while the
> 2<sup>nd</sup> floor might have a balcony, tiled floor and glass
> windows.

        a.  To add adjustments, select the Floor item to add adjustments.
        b.  Click on the `Floor Detail` to open the Building Additional Items screen.

> ![image|512x397,100%](images\image196.png)
<!-- > <img src="images\image196.png" style="width:3.48799in;height:2.47535in" /> -->

        c.  Click on the Code column of the first empty row.
        d.  Lookup the adjustment type by entering its code and pressing **Enter**.
        e.  Enter the value for any parameters required.
        f.  Click `OK` to compute the adjustment.
        g.  Repeat steps c-f to add all adjustments.

<!-- -->


4.  Click on `OK` to close the Building Floors screen.

5.  Verify that the computations are correct.

6.  Click on `Save` and `Close` to return to FAAS main screen.

7.  Click on `Save` to commit the FAAS record.

8.  Click on `Submit` to forward the FAAS record for approval.

9.  Click on `Approve` to approve the FAAS record.