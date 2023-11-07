## Settings and Preferences

Settings and Preferences are critical to the proper operation of the
system. It controls different areas including assessment, computation,
signatories and workflow processes. The appropriate behavior of the
system is dependent on the correct setup of the settings and
configuration of the preferences.

### Signatory Template

The signatory template identifies the different personnel who have
signed the FAAS appraisal sheet. This is used in the capturing of manual
FAAS record into the system. The template includes only the four (4) key
positions, namely: Appraiser, Taxmapper, Recommender and Approver.

#### Adding New Signatories

1.  To add a new signatory, open the Main Menu.

2.  Open the Signatory Templates list page by double-clicking the
    **Settings -&gt; Signatory Templates** item.

![image|512x397,100%](images\image156.png)
<!-- <img src="images\image156.png" style="width:2.56843in;height:1.43107in" /> -->

3.  Select the Doc Type item in which to add a new signatory and then
    click `Open` to display the signatory page.

![image|512x397,100%](images\image157.png)
<!-- <img src="images\image157.png" style="width:4.93688in;height:2.26847in" /> -->

4.  The screen above allows you to manage the signatories.

5.  Click Add to open the new signatory page.

![image|512x397,100%](images\image158.png)
<!-- <img src="images\image158.png" style="width:2.67467in;height:1.66854in" /> -->

1.  Enter the following information:

    1.  First Name – the first name of the signatory. This is required.

    2.  Middle Name - the middle name of the signatory.

    3.  Last Name - the last name of the signatory. This is required.

    4.  Title - the job title of the signatory. This is required.

    5.  Department - the department of the signatory. This is required.

2.  Or you can click on `Search Personnel` and select existing personnel
    from the lookup list.

![image|512x397,100%](images\image159.png)
<!-- <img src="images\image159.png" style="width:3.55675in;height:0.77511in" /> -->

6.  Click `Save` .

7.  Click `Close` .

### Assessor Settings and Preferences

The assessor settings and preferences are options that control the
processing and behavior of transactions, reports and workflows. The
complete settings are:

<table>
<thead>
<tr class="header">
<th><strong>Setting</strong></th>
<th><strong>Description</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>allow_consolidation_with_balance</td>
<td>Must be checked if consolidation with balance is allowed.</td>
</tr>
<tr class="even">
<td>allow_faas_transaction_with_balance</td>
<td>Must be checked if FAAS transaction with balance is allowed.</td>
</tr>
<tr class="odd">
<td>allow_subdivision_with_balance</td>
<td>Must be checked if subdivision with balance is allowed.</td>
</tr>
<tr class="even">
<td>current_ry</td>
<td>The current revision year</td>
</tr>
<tr class="odd">
<td>faas_datacapture_allow_edit_av</td>
<td>Allow editing of assessed value to match the manual computation when capturing FAAS.</td>
</tr>
<tr class="even">
<td>gr_ordinance_date</td>
<td>The general revision ordinance date. Needed when printing the tax declaration.</td>
</tr>
<tr class="odd">
<td>gr_ordinance_no</td>
<td>The general revision ordinance no. Needed when printing the tax declaration.</td>
</tr>
<tr class="even">
<td>gr_renumber_pin</td>
<td>Must be checked if PINs are renumbered when batch processing general revision</td>
</tr>
<tr class="odd">
<td>gr_td_autonumber</td>
<td>Must be checked if FAAS are automatically assigned with TD No when batch processing general revision</td>
</tr>
<tr class="even">
<td>lgu_name</td>
<td>The name of the LGU</td>
</tr>
<tr class="odd">
<td>lgu_objid</td>
<td>The PIN of the LGU</td>
</tr>
<tr class="even">
<td>lgu_type</td>
<td>The type of the LGU. Valid values are <strong>city</strong>, <strong>province</strong> or <strong>municipality</strong>.</td>
</tr>
<tr class="odd">
<td>pin_parcel_length</td>
<td>The length of the parcel. This is 3 for old numbering system and 2 for the new numbering system.</td>
</tr>
<tr class="even">
<td>pin_section_length</td>
<td>The length of the section. This is 2 for old numbering system and 3 for the new numbering system.</td>
</tr>
<tr class="odd">
<td>pin_type</td>
<td>The current PIN numbering system in the LGU. Valid values are <strong>old</strong> and <strong>new</strong>.</td>
</tr>
<tr class="even">
<td>rpt_round_to_ten_item_assessed_value</td>
<td>Check if the assessed value of items is rounded off to Tens (10).</td>
</tr>
<tr class="odd">
<td>sangguinan_name</td>
<td>The name of the sanggunian.</td>
</tr>
<tr class="even">
<td>subdivision_allow_equal_area_only</td>
<td>Check if subdivision with mismatched area is allowed.</td>
</tr>
<tr class="odd">
<td>td_autonumber</td>
<td>Check if TD No. is automatically generated when approving a transaction</td>
</tr>
<tr class="even">
<td>td_autonumber_sequence_count</td>
<td>The number of sequence count when automatically generating TD No. Default count is 5.</td>
</tr>
<tr class="odd">
<td>td_format</td>
<td><p>The format of the TD No. when automatically generated. The format is based on the following characters:</p>
<ul>
<li><p>Y - revision year</p></li>
<li><p>P - province index</p></li>
<li><p>C - city index</p></li>
<li><p>M - municipality index</p></li>
<li><p>D - district index</p></li>
<li><p>B - barangay index</p></li>
</ul>
<p>The standard format is Y-B.</p></td>
</tr>
<tr class="even">
<td>td_report_display_appraisedby</td>
<td>Must be checked if the appraiser information is to be displayed on the tax declaration printout.</td>
</tr>
<tr class="odd">
<td>td_report_display_recommendedby</td>
<td>Must be checked if the recommender information is to be displayed on the tax declaration printout.</td>
</tr>
<tr class="even">
<td>td_report_item_format</td>
<td>The column format for the tax declaration printout. Valid values are BLGF and CUSTOM. The default is BLGF.</td>
</tr>
<tr class="odd">
<td>td_show_landinfo_on_improvements</td>
<td>Must be checked if land information is to be displayed on the improvement tax declaration printout.</td>
</tr>
<tr class="even">
<td>url_logo_assessor</td>
<td>The URL for the assessor logo.</td>
</tr>
</tbody>
</table>

#### Editing Settings and Preferences

1.  To edit the settings and preferences, open the Main Menu explorer.

2.  Navigate and double-click the **Settings -&gt; Assessors -&gt;
    Assessor Settings and Preferences** item

![image|512x397,100%](images\image160.png)
<!-- <img src="images\image160.png" style="width:3.03087in;height:3.6058in" /> -->

3.  Setup the correct settings and then click `Update` .

4.  Click on the
    ![image|512x397,100%](images\image161.png)
    <!-- <img src="images\image161.png" style="width:0.29996in;height:0.13134in" /> -->
    to move from page to page.