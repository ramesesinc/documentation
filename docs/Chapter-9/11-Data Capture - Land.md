### Data Capture - Land

When a new system is implemented, the very first operation to be done is
to capture existing records into the system. This is the process of
encoding the information and performing the necessary transactions to
match the current state of the document being captured.

> **Note:** *For LGU's with existing computerized real property
> assessment, migration of data might be possible. However, thorough
> data analysis must be done to fully evaluate if the existing data has
> the necessary requirements for the ETRACS system to process it
> completely and accurately.*

When starting from scratch, it is recommended to capture all land
properties first before entering the records for buildings, machineries,
plants/trees and miscellaneous properties. This is necessary since the
encoding of improvements require that the land record is already
available.

1.  To capture an existing FAAS record, open the Main Menu explorer.

2.  Double-click on the **Transactions -&gt; Assessor -&gt; Manual
    Support -&gt; Data Capture** item or by accessing the Quick Launcher
    using the code **DC01**. This will display the Data Capture FAAS
    Initial Information screen.

> ![image|512x397,100%](images\image188.png)
<!-- > <img src="images\image188.png" style="width:2.26282in;height:2.59343in" /> -->

3.  Enter the following information:

    1.  **PIN Type** – valid values are **new** or **old**. The new pin
        type format is 000-00-0000-000-00 while the old pin format is
        000-00-000-00-000.

    2.  **Revision Year** – the general revision year to capture

    3.  **Transaction** – the type of transaction for the FAS to capture

    4.  **Property Type** – the type of property either land, building,
        machinery, plant/tree or miscellaneous.

    5.  If the property type is land:

        1.  **Barangay** – lookup the barangay of the FAAS to capture

        2.  **Section** – the section no. of the FAAS to capture

        3.  **Parcel** – the parcel no. of the FAAS to capture

        4.  **Claim No** – the claim no (if applicable)

    6.  **Auto-number** – normally uncheck. Used only in cases where
        capturing is renumbered.

4.  Validate that the manual PIN No. matches the generated PIN No.

Click `Next` to open the FAAS main screen.

### The FAAS Main Screen

The main screen captures the basic FAAS information. The information are
editable depending on the type of transaction under process. For data
capture, all required data must be supplied.

![image|512x397,100%](images\image189.png)
<!-- <img src="images\image189.png" style="width:5.11186in;height:3.73703in" /> -->

1.  Enter the FAAS information based on the manual FAAS record. Make
    sure that all required data are supplied.

2.  Verify that the encoded data are correct.

3.  Click on the `PIN` button to open the real property page shown
    below:

> ![image|512x397,100%](images\image190.png)
<!-- > <img src="images\image190.png" style="width:4.48188in;height:3.27459in" /> -->

4.  Enter the real property required information namely: cadastral lot
    no and the boundaries.

5.  Click `Save` and then `Close` to return to the FAAS main screen.

6.  Click on `Assessment Detail` to open the main RPU screen below:

> ![image|512x397,100%](images\image191.png)
<!-- > <img src="images\image191.png" style="width:5.12957in;height:3.44749in" /> -->

7.  Select the classification of the land from the Classification combo
    box.

8.  Add the land actual use on the land assessment list:

    1.  Click on the Subclass column of the first empty row.

    2.  Enter the following information:

        1.  Subclass – lookup the land subclass to reference.

        2.  Tax? – must be checked if the item is taxable

        3.  Actual Use – lookup the actual use to reference. The actual
            use controls the assessment level to use in the computation.

        4.  Strip – lookup the stripping (if applicable)

        5.  Area – enter the area of the item

    3.  Verify that the Assessed Value is correct. If the setting
        **faas\_datacapture\_allow\_edit\_av** is set, then the assessed
        value can be modified to match the manually computed value.

    4.  Move the active row into the next row to commit the item.

    5.  Repeat steps a-d to add any land item.

9.  If land adjustments are specified, click on `Land Value
    Adjustments` to open the adjustment screen.

    > ![image|512x397,100%](images\image192.png)
    <!-- > <img src="images\image192.png" style="width:3.59955in;height:2.67467in" /> -->

    1.  Click on the Code column of the first empty row.

    2.  Lookup the adjustment to add and supply any parameters required.

    3.  Move the active item to the next row.

    4.  Click on `OK` to close the screen.

<!-- -->

10. If there are Actual Use Adjustments, click on `Actual Use
    Adjustments` to open the adjustment screen.

    1.  Click on the Code column of the first empty row.

    2.  Lookup the adjustment to add and supply any parameters required.

    3.  Move the active item to the next row.

    4.  Click on `OK` to close the screen.

11. Verify that the computations are correct.

12. Click on `Save` and `Close` to return to FAAS main screen.

13. Click on `Save` to commit the FAAS record.

14. Click on `Submit` to forward the FAAS record for approval.

Click on `Approve` to approve the FAAS record.