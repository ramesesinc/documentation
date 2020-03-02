<b>Rule Management</b>
===

<br />

<b>Overview</b>
===

Before proceeding with the other transactions in ETRACS, it is important first to discuss Rules. One of the components that make ETRACS special and the only one of its kind is the use of Business Rules to customize the system to fit the LGU’s requirements. The business rules are executed in a special software called a Rule Engine. Some of the application of business rules in ETRACS are as follows:

- Calculating taxes and fees in business assessments

- Determining requirements in business

- Compute Billing and calculating penalties

- Customization of workflow 

Before when one wants to customize the system they must have a ready programmer who can edit the code. This is time consuming, error-prone and very difficult to maintain. In ETRACS, customization is done by authoring rules through an intuitive user interface. Before rules can be created however, the rule author must know the behavior of rules and its effects. Rules can be simple or complex depending on the requirements of the LGU. Rule authoring requires logic reasoning and those will author rules must know how to interpret the rules and can translate or express it using the rules interface. Ideally, rules should be done by the domain expert, i.e. the one knowledgeable about the ordinances for example. However rule authoring requires special computer operation, that’s why it is recommended that rule authoring be assigned to an IT personnel with approval by the domain expert. If the domain expert is computer savvy enough, then they could also do it themselves.

<br />
<br />
<br />

<b>What are Rules</b>
===

<br />

A rule engine is a special software that separates business logic from application code and classified as an expert system, a branch of artificial intelligence that aids in the decision making process. The rules resemble a language that can be clearly understood by a normal business person. The rules are relatively easy to understand and intuitive. It is composed of two parts - a <b>Condition</b> and a <b>Consequence</b> or <b>Action</b>. Pieces of information called <b>Facts</b> are evaluated in the Condition part, known as <b>Constraints</b>, such that if  all constraints are true, the related action will execute. The following is a pseudo example of a rule construct:

<b>when (condition)</b>
	
Application (type is “NEW” ) <br />
Line of Business (classification is “Manufacturer”) <br />
CAPITAL is provided for said Line of Business

<br />

<b>then (consequence or action)</b>

Add “BUSINESS TAX” using formula: “CAPITAL * 0.30 * 0.01” for the said line of business

<br />

This piece of rule is an excerpt from the Business Assessment Rules. In simple terms, this means that if an application is for a new business, and has a line of business which is classified as a manufacturer and the capital is provided for this line of business, then we add a business tax where amount is equal to CAPITAL * 0.30 * 0.01 and must be applied per line of business. 

In business applications, there are sometimes more than one line of business for a business. For example there is an application that has two lines of business, one manufacturer and the other retailer, only the manufacturer in this case will be computed for business tax because the retailer does not match the condition above. For another example, if the application being evaluated is for a Renewal application, the rule above will not fire because it explicitly states it is applied only for New. So in other words,  for a rule to execute, all constraints in the condition must evaluate to be true. If even one is not true, the rule will not be executed. 

By creating many rules, the desired effect will be completed. There could be many rules or few rules depending on the area being addressed. Rule engines are quite powerful because they are designed to execute very fast no matter how many there are and that makes it special. However, one needs to be careful because sometimes there are overlapping rules and the rule author might have difficulty tracing and correcting these rules to eliminate the side effects. 

<br />
<br />
<br />

<b>Rule Execution</b>
===

<br />

Rules operate on data called <i>Facts</i>. A fact is a structured holder of data that is evaluated by the rule engine. When authoring rules, we specify which facts we want to evaluate. Data from the application inputted by the user are sent to the server. Before data is processed by the rule engine, it is first segregated into facts which becomes the input data for the rule engine. The engine searches for rules that match the given facts and executes those that match to produce an output.

<br />

![alt text][execution]

<br />
<br />
<br />

<b>Rule Groups and Salience</b>
===

<br />

In order to avoid possible complex non-terminating rules or <i>“endless loops”</i>, the rule groups are provided. Rule groups are like compartments wherein the input is processed then output is generated in a straight chaining manner. The output of one chain becomes the input of the next chain so on and so forth until we get to the last before it ends processing.


![alt text][input]


Salience refers to the order in which rules executes.  If there are two rules in the same rule group, the one with a higher salience will always execute first. The general behavior of ETRACS is overriding, so the lower salience or the last rule executed will always prevail. So if you want some rule to execute in general, i.e. one that might be applied to all, make the salience a very high number. If you want more specific, make salience a lower value. To understand this further, refer to the application of rules in the business and real property sections.

<br />
<br />
<br />

<b>Managing Rules</b>
===

<br />

Starting from version 2.5, the rule authoring interface is standardized so that each rule author from different business domains will have a similar interface. For better management, rules are organized into groups known as <i>rulesets</i>. Rulesets are sets of rules for a certain function or area where rules are to be applied. For example business assessment, rpt billing and business billing are different rulesets. To view this in the system go to <b>Main Menu > Rule Management</b>. Under this would be the domain, and rulesets for each domain are displayed. See diagram below:


![alt text][rule]


To manage these rulesets, position the mouse to the specific ruleset and double click to open the list of rules for the ruleset. See diagram below:


![alt text][ruleset]


The Ruleset title shows the ruleset name. The toolbar contains some actions to manage rules:

- <b>Close</b> – closes the window
- <b>New</b> – creates a new rule
- <b>Open</b> – Opens the selected rule from the list
- <b>Refresh</b> – refreshes the list if new rules are added in case the new rule does not appear in the list
- <b>Analyzer</b> – shows the analyzer or tester for the rules. The analyzer is ruleset specific which means there is another analyzer for another ruleset.
- <b>Tools</b> – miscellaneous intended for use for developers
- <b>Rule Groups</b> – shows the rulegroups for this particular ruleset. Selecting a rule group shows the rules under a certain rule group. Rule groups are discussed further in the Rule Groups section. 
- <b>State</b> – shows which rules are draft, deployed, or approved. Draft means the rule is still not finished. Deployed are active rules while approved are approved rules but not deployed. 
- <b>Title</b> – search facility based on title
- <b>Tools</b> – displays a drop down menu of support functions. Of particular importance is the Reload function. In case there are errors when authoring rules.

The rule list view shows a listing of the rules that match the filter above. It shows the following columns – name of rule, title, the salience or priority of execution, the status, the rule group associated, the rule author, date created and effectivity date. The highlighted line is the selected line. The details of the selected line is shown below the list. The rule details show the information regarding the rule.

To open a rule, select or highlight a rule then double click the mouse or click on the Open button from the toolbar. This will open the rule info screen. The English-like expression is displayed to be easily understandable.


![alt text][ruleinfo]

<br />
<br />
<br />

<b>Adding a new rule</b>
---

<br />

To  add a new rule, click on New from the Rule List View. Specify the rule name and description of the rule. The rule group can be changed. Rule groups determine which section or compartment in the rule engine it will execute.  (For more about rule groups, go to <b><i>Rule Groups</i></b> section). 


![alt text][addrule]

<br />

Specify the rule name, rule set and rule group and a short description of what this rule does.  The rule name does not accept spaces in between so it automatically adds an underscore instead of spaces. The rule name must be unique within the ruleset. Click Next when completed. This will immediately save this rule in the database and displays the rule authoring screen. 


![alt text][rulename]

<br />
<br />
<br />

The Rule Toolbar contains functions for the rule authoring screen. 

- <b>Edit</b> –is used for editing the general info, i.e. the ruleset, rulegroup , salience and effectivity dates. 

- <b>Deploy</b>  - is used to activate the rules. Unless the rule is deployed, the rule will not take effect. 

- <b>Delete</b> – is used to permanently delete this rule. If the rule is deployed, then it cannot be deleted. Undeploy first before deleting.

- <b>View Rule</b> – is used to view the generated rule. This is used for debugging support. 

<br />

The rule authoring buttons include the following:

- <b>Add Condition</b> – adds a new condition 

- <b>Add Action</b> - adds a new action  

- <b>Refresh</b> – In case the rule does not reflect on the expression panel, click on refresh

<br />
<br />
<br />

<b>Adding Condition</b>
---

<br />

To add conditions, click on the Add Condition button. Select a fact from the available list and click Next.


![alt text][condition]

<br />
<br />

Next step is to build constraints from the selected fact.  If you want to reference this fact in other constraints or actions, specify a variable name. This can be any name you can assign. To add a constraint click on the Add link. 


![alt text][constraint]

<br />
<br />

This will display a list of fields within this fact.  Select a field used for the constraint. The criteria will depend on the type of data of the field. For example, if the field chosen is a Boolean (true or false) then the criteria will  be limited to true or false type of entries, if decimal or integer, it will display number values and conditions, for lookups, it will show a lookup screen. 


![alt text][display]

<br />
<br />

After selecting  the fields, you can now set the constraints. A constraint consists of the fieldname, an operator for comparing, and the constraint value.  The operator is dependent on the data type of the field i.e. a Boolean field will have a different operator for numbers like decimal and integer.


![alt text][constraints]

<br />
<br />

You can add as many constraints. You can also add fields which you can assign a variable name to so it can be used in the succeeding constraint or action.  If you made an error and you want to remove the constraint, just click on the ![alt text][remove] so it can be removed. Once you have finished completing the constraints click OK. The result will show in the rule expression panel. 


![alt text][constraints2]


You can remove this constraint by clicking the Remove  link. To edit the constraint, click Edit. 

<br />
<br />

<b>Add Actions</b>
---

<br />

To add actions, click on Add Action button. Select an action from the displayed list.  Click next when completed.


![alt text][addaction]

<br />
<br />

The parameters of the action depends on the type of action selected. For example for computation type of actions, a formula field is displayed. 


![alt text][action2]

<br />
<br />

The amount in this example can be expressed as a formula or as a table. A formula field enables you to write formulas for computing the value. To open the formula editor click on the fX button. 


![alt text][action3]


<br />
<br />

To provide more expressive formulas, you can even write short scripts called groovy  scripts.  The groovy scripting engine is an open-source scripting language for java.  You can use variables declared in the condition part included in your formula. When action is completed, press OK to save the formula. At this point, when everything is complete, you can deploy the rule.


<br />
<br />
<br />

<b>Testing</b>
---

<br />

You need to test the rules so that you will not have problems later. To check, go to the rule list view and see if there is an analyzer attached. If there is, then this rule can be tested. The following is an example of the Business Assessment Rule Analyzer. Because analyzers or simulators are specific to the domain, it will not be discussed here.


![alt text][testing]


<br />
<br />
<br />

<b>Handling Errors</b>
---

<br />

There are instances when errors occur that causes all other rules to not execute properly. It is sometimes caused by not well constructed rules which were not handled properly by the system. In this case, the entire ruleset cache must be cleared and reloaded. To do this, go to the rule view list and click on <b>Tools</b>.


![alt text][tools]


Click on the reload button and wait for a few seconds to reload the ruleset. This may take time depending on the number of rules deployed. A message will be displayed indicating the process was completed. 

<br />
<br />
<br />










[execution]: ./images/8-a.png
[input]: ./images/8-b.png
[rule]: ./images/8-c.png
[ruleset]: ./images/8-d.png
[ruleinfo]: ./images/8-e.png
[addrule]: ./images/8-f.png
[rulename]: ./images/8-g.png
[condition]: ./images/8-h.png
[constraint]: ./images/8-i.png
[display]: ./images/8-j.png
[constraints]: ./images/8-k.png
[remove]: ./images/remove.png
[constraints2]: ./images/8-l.png
[addaction]: ./images/8-m.png
[action2]: ./images/8-n.png
[action3]: ./images/8-o.png
[testing]: ./images/8-p.png
[tools]: ./images/8-q.png


