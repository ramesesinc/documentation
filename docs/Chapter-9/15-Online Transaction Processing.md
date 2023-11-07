## Online Transaction Processing

The Online Transactions are now strictly implemented using workflow
processes within the assessor’s department. The workflow process
implements a total computerization solution allowing all stakeholders to
perform their tasks electronically with the goal of eliminating manual
steps.

To achieve this objective, an electronic FAAS record is created which is
then forwarded from workflow steps. In each step, applicable information
are then added until the FAAS data is completed.

The advantages of having fully computerized transactions are:

-   Actual workflow processes are fully implemented

-   Data are encoded by the actual personnel and not by encoders

-   Check and balance are fully supported.

-   Workloads are easily monitored

-   Transaction and personnel efficiency can be analyzed and monitored

### Basic Workflow Processes

The basic workflow processes is shown below. Its starts with the
**Receiver/Examiner** accepting the documents required for the
transaction. The required documents are then verified and validated. A
FAAS record is then created with all support documents added. The record
is then forwarded for examination. The **Examiner** schedules the
property for examination and performs ocular inspection. The ocular
inspection finding is then reflected. The record is then forwarded to
**Taxmapper** where it is taxmap and approved by the **Taxmapper
Chief/Head**. The FAAS is then appraised by the **Appraiser**. After
verification by the **Appraisal Chief/Head**, the record is forwarded to
the **Assistant Assessor** for approval. The record is then approved and
submitted to the **Assessor** who then approves the record. The approve
FAAS is forwarded to the **Records** section and the support documents
are attached digitally by scanning or photograph.

![image|512x397,100%](images\image202.png)
<!-- <img src="images\image202.png" style="width:5.34028in;height:3.22301in" /> -->

### Supported Online Transactions

The supported online transactions are:

| **Transaction**            | **Quick Launcher Code** |
|----------------------------|-------------------------|
| Transfer of Ownership      | TR01                    |
| Transfer with Reassessment | TR02                    |
| Transfer with Correction   | TR03                    |
| Correction of Entry        | CE01                    |
| Change Classification      | CC01                    |
| Change Taxability          | CT01                    |
| Change Depreciation        | CD01                    |
| Re-Assessment              | RE01                    |
| Revision                   | RV01                    |
| New Discovery              | ND01                    |
| General Revision           | GR01                    |
| Subdivision                | SD01                    |
| Consolidation              | CS01                    |
| Annotation                 | FA01                    |
| Cancel FAAS                | CF01                    |
| Resection                  | RS01                    |
| Multiple Claim Settlement  | MS01                    |

1.  To process an online transaction such as Transfer of Ownership,
    double-click on the **Transactions -&gt; Assessor -&gt; Online -&gt;
    Transfer of Ownership** item. This will display the Transaction
    Initial Information screen.

> ![image|512x397,100%](images\image203.png)
<!-- > <img src="images\image203.png" style="width:2.26282in;height:1.73728in" /> -->

2.  Search the Property to process and then click `Next` to validate
    and create the FAAS record and display the main workflow screen.

> ![image|512x397,100%](images\image204.png)
<!-- > <img src="images\image204.png" style="width:4.8796in;height:2.72434in" /> -->
>
> The main screen is divided into two parts, namely:

-   **Section Pane** – the section pane displays an information category
    or section such as General Info, Requirements and etc. The section
    list varies depending on the type of transaction and permission of
    the user. Most sections are displayed. A section data is editable if
    the user has a permission to modify the data.

-   **View Pane –** the view pane is located directly to the right of
    the section pane. It displays the user interface for the selected
    section.

3.  Click on the Section assigned to you and modify the data as needed.

4.  Click on `Submit` to forward the record to the next workflow
    process.

### Assigning a Workflow Process 

The workflow process has built-in notification system (for member LGU
only) that notifies the respective users when a new transaction is
available for processing as shown below:

![image|512x397,100%](images\image205.png)
<!-- <img src="images\image205.png" style="width:3.58705in;height:2.02528in" /> -->

The notified user then accepts the record by clicking on the `Assign To
Me` button. Once assigned, the system tracks the record until it is
forwarded to the next workflow step. These steps are repeated until the
record is approved.

### Subdivision

Subdivision is the process of dividing an area of land into two or more
lots. Before performing the subdivision transaction the required
documents must be completed and verified such as the approved
subdivision plan, authority to sell from HLURB, certified true copies of
TCT, realty tax clearances and etc. The property to be subdivided must
be fully paid and has no pending obligations to the LGU. The subdivision
can only be approved if the mother land's area is equal to the total
land area of the subdivided lots. The system does not allow partial
subdivision. This eliminates inaccurate status between the mother land
and the subdivided lots.

During subdivision, all improvements will be manually assigned to one of
the newly subdivided lots in the subdivision. This avoids the problem of
an improvement still referencing a cancelled or retired land. Upon
approval, the tax declarations and real property unit records of these
land improvements be cancelled and new ones will be created and issued
to it.

#### Initial Information

To process a subdivision transaction:

1.  Double-click on the **Transactions -&gt; Assessor -&gt; Online -&gt;
    Subdivision** item or use the Quick Launcher using the code
    **SD01**. This displays the Subdivision Initial screen.

> ![image|512x397,100%](images\image206.png)
<!-- > <img src="images\image206.png" style="width:3.27459in;height:1.93152in" /> -->

2.  Search the Land property to be subdivided.

3.  Enter the default memoranda. The default memoranda will be
    automatically provided for all subdivided lands and affected
    improvements.

4.  Click `Next` to validate and create the subdivision and display
    the main workflow screen.

> ![image|512x397,100%](images\image207.png)
<!-- > <img src="images\image207.png" style="width:3.93076in;height:3.09961in" /> -->

5.  Follow the normal transaction workflow as depicted in **Error!
    Reference source not found.**.

#### Creating Subdivided Lands

> The creation of subdivided lands shall be performed by the Taxmapper.
> To create subdivided lands:

6.  Select the Subdivided Land PINs section to display the Subdivided
    Land PIN Information screen below.

> ![image|512x397,100%](images\image208.png)
<!-- > <img src="images\image208.png" style="width:4.89522in;height:2.65662in" /> -->

7.  Click on `Add` to open the Real Property screen.

> ![image|512x397,100%](images\image209.png)
<!-- > <img src="images\image209.png" style="width:4.28696in;height:2.93713in" /> -->

8.  Enter the required information:

    1.  **Section No. –** the required section no.

    2.  **Parcel No.** – the required parcel no.

    3.  **Cadastral Lot No.** – the required cadastral lot no.

    4.  **North, East, South and West** – the boundary information

9.  Click `Save` to commit the changes.

10. Repeat steps 7-9, to add all subdivided lands.

#### Affected Improvement Setup

> During a subdivision transaction, there might be one or more
> improvements that are affected. These improvements must be transferred
> to one of the subdivided lands. The taxmapper must decide on the new
> location of all affected improvements. To update the affected
> improvements:

11. Select the Affected RPUs section to open the Affected RPUs
    Information screen.

> ![image|512x397,100%](images\image210.png)
<!-- > <img src="images\image210.png" style="width:4.77545in;height:2.6403in" /> -->

12. Specify the New PIN for each affected real property units.

13. Specify the New Suffix for each affected real property units.

14. Review the correctness of all information.

15. Click on `Submit` to forward the record into the next workflow.

### Consolidation

Consolidation is the process of combining two or more lots into a single
lot. The transaction requires support documents such as certified true
copies of TCT, realty tax clearances and etc. The property to be
consolidated must be fully paid and has no pending obligations to the
LGU. The owner of the newly consolidated land can be one of the owners
of the land comprising the consolidation.

During consolidation, all improvements under each consolidated lands
will be automatically updated. This avoids the problem of an improvement
referencing a cancelled or retired land. Upon approval, the tax
declarations and real property unit of these land improvements are
cancelled and new ones are created.

#### Initial Information

To process a consolidation transaction:

1.  Double-click on the **Transactions -&gt; Assessor -&gt; Online -&gt;
    Consolidation** item or use the Quick Launcher using the code
    **CS01**. This displays the Consolidation Initial screen.

> ![image|512x397,100%](images\image211.png)
<!-- > <img src="images\image211.png" style="width:3.26209in;height:1.95601in" /> -->

2.  Enter the default memoranda. The default memoranda will be
    automatically provided to the consolidated land and the affected
    improvements.

3.  Click `Next` to validate and create the consolidation and display
    the main workflow screen.

> ![image|512x397,100%](images\image212.png)
<!-- > <img src="images\image212.png" style="width:4.12558in;height:2.98167in" /> -->

4.  Click on `Edit` and enter the required information:

    1.  **Effectivity Year** – the effectivity year

    2.  **Effectivity Qtr** – the effectivity qtr

    3.  **Title No**. – the new title no. if available

    4.  **Title Date** – the new title date if available

    5.  **Taxpayer** – the new taxpayer

    6.  **Owner Name** – the new owner name

    7.  **Owner Address** – the new owner address

    8.  **Memoranda** – the memoranda

5.  Click on `Save` to commit the changes.

6.  Follow the normal transaction workflow as depicted in **Error!
    Reference source not found.**.

#### The Consolidation Land

> The consolidation land is the unified land created by the
> consolidation. To create the land:

7.  Select the Consolidated Lands section to display the Consolidated
    Lands screen.

> ![image|512x397,100%](images\image213.png)
<!-- > <img src="images\image213.png" style="width:4.51506in;height:2.68196in" /> -->

8.  Click on `Create Consolidation PIN` to open the Real Property
    screen.

> ![image|512x397,100%](images\image214.png)
<!-- > <img src="images\image214.png" style="width:4.31935in;height:2.93713in" /> -->

9.  Enter the required information:

    1.  **Barangay** – the barangay information

    2.  **Section No. –** the required section no.

    3.  **Parcel No.** – the required parcel no.

    4.  **Cadastral Lot No.** – the required cadastral lot no.

    5.  **North, East, South and West** – the boundary information

10. Verify that all information are correct.

11. Click `Save` to commit the changes.

#### Adding the Consolidated Lands

The consolidated lands are the lands to be unified. Add all consolidated
lands on the list.

12. Click on the **TD No.** column on the first empty row.

13. Lookup the land to consolidated.

14. Repeat step 12 – 13 to add all lands to consolidate.

15. Click on `Submit` to forward the record into the next workflow.

### Annotation

FAAS can be annotated with the following annotations such as Mortgage,
Bail Bond and more. Once a FAAS is annotated, certain restrictions on
majority of the transactions are applied such as the transfer of
ownership, change of depreciation and etc. The annotation transaction
requires payment of required fees before processing.

To annotate a FAAS:

1.  Double-click on the **Transactions -&gt; Assessor -&gt; Online -&gt;
    Annotation** item or use the Quick Launcher using the code **FA01**.
    This displays the annotation initial screen.

> ![image|512x397,100%](images\image215.png)
<!-- > <img src="images\image215.png" style="width:2.61287in;height:1.71854in" /> -->

2.  Lookup the property to annotate by entering its TD No. and pressing
    `Enter` .

3.  Click `Next` to open the main page.

> ![image|512x397,100%](images\image216.png)
<!-- > <img src="images\image216.png" style="width:3.86929in;height:3.30584in" /> -->

4.  Enter the required information:

    1.  **Annotation Type** – the type of annotation

    2.  **File No**. – the reference no. of the annotation document

    3.  **O.R. No.** – the serial receipt no.

    4.  **O.R. Date** – the date of the receipt

    5.  **O.R. Amount** – the amount of the receipt

    6.  **Memoranda** – the complete memoranda for the annotation

5.  Verify all information for correctness.

6.  Click `Save` to commit the record.

7.  Click `Submit` to submit the record for approval.

8.  Click `Approve` to approve the record.

### Cancel Annotation

An annotation shall be cancelled once all its obligations are settled.
To cancel an annotation:

1.  Double-click on the **Transactions -&gt; Assessor -&gt; Listings
    -&gt; Annotation** item or use the Quick Launcher using the code
    **FA00** to open the annotation listing page.

> ![image|512x397,100%](images\image217.png)
<!-- > <img src="images\image217.png" style="width:4.56818in;height:2.33096in" /> -->

2.  Search and select the annotation to cancel.

3.  Click on `Cancel Annotation` to open cancel Cancel Annotation
    page.

> ![image|512x397,100%](images\image218.png)
<!-- > <img src="images\image218.png" style="width:3.81827in;height:3.06293in" /> -->

4.  Enter the required information:

    1.  **File No.** – the reference no. of the cancellation document

    2.  **Signed By –** the signatory of the cancellation document

    3.  **Job Title –** the job title of the signatory

    4.  **Date Signed –** the date the cancellation document was signed

    5.  **O.R. No.** – the serial no. of the receipt

    6.  **O.R. Date** – the date of the receipt

    7.  **O.R. Amount** – the amount of the receipt

    8.  **Remarks** – any additional notes.

5.  Verify that all information are correct.

6.  Click on `Save` to commit the record.

7.  Click `Submit` to submit the record for approval.

8.  Click `Approve` to approve the record.