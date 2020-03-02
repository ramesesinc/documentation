Overview of ETRACS
====================

ETRACS (Enhanced Tax Revenue Assessment and Collection System) is a software system designed
and developed by Rameses Systems Inc. (Rameses). The primary goal of the system is to automate
real property assessments, business permits licensing and revenue collection operations of local
government units (LGU). Through automation, the LGU should become more efficient and improve
its reporting accuracy. The system controls the processes through carefully designed business
workflows which are based on standard operating procedures and guidelines of LGUs. In effect, it
also promotes transparency and good governance since it applies controls for check and balance and
audits each transaction being made making it difficult to do fraudulent activities.
The standard system can be configured for City, Municipality or Province and is composed of three
modules as follows:
- Collection (Treasury Revenue Operations)
- Real Property Assessment
- Business Permits and Licensing

ETRACS can now be configured also for satellite offices of the LGUs like barangays, bus terminals,
hospitals, water works, market etc. This is called micro installations and is basically a stripped-down
version of ETRACS. The objective is to allow transactions to be collected where the transaction
happens to reduce data capture in the main office and ensure on-time collection and remittance.
ETRACS is designed as a modular platform and runs on the _Osiris 2 Enterprise Framework TM_, a
proprietary framework of Rameses. The platform hosts small applications called plug-ins. Being a
multi-user system, the user can only access these applications if they have the proper authorization
and permissions. Because transactions in the system are sensitive and require accountability, ETRACS
has a comprehensive security model. Users are assigned roles and permissions that can be further
customized per user. Data passing through the network are encrypted and each terminal connecting
to the server must be registered by the system administrator. Users are required to change
passwords from time to time. Besides system level security it can also be application-specific forexample, collectors cannot perform collection if they don’t have a cashbook defined and they don’t
have accountable forms on hand.
ETRACS aims to elevate innovation in the field of tax revenue collection to provide an efficient and
transparent local government unit and overall improve the quality of service to taxpayers. <br />
<br />
<br />


History
===

ETRACS is the successor of another project called TRACS (Tax Revenue Assessment and Collection
System). In 2000, TRACS was one of the component computerization projects of PRMDP (Philippine
Regional Municipal Development Project) funded by an AusAID grant. The program was previously
subcontracted to another vendor but because the system was quite complicated, the project was far
from complete with the program nearing its end. To rescue the project, the whole software was
redesigned and development was subcontracted to Rameses at the last minute. The final system was
certified by (Commission on Audit) COA and passed the basic requirements of (Bureau of Local
Government Finance) BLGF. After the project was turned over to the government, TRACS enjoyed
relative success as it was used by some of the recipient cities to great effect. However more
improvements needed to be done but was not possible because the program was already closed.
Realizing this need, Rameses recoded the project on their own initiative and used java and open
source technologies so that LGUs can avail the system at the lowest cost possible and without
worrying about buying compulsory software licenses. The aim is to make a business model that is
“friendly” and attractive for grants. The vision is to make the system the de facto standard in local
government systems and the benchmark for best practice and good governance. However, ETRACS
also has a higher vision which is the innovation of e-government to allow citizens and businesses to
access these services through cloud technologies. The following shows the timeline and version
history of the project:
- 2000 – Rameses was hired to rescue and recode the failed TRACS project for PRMDP, a grant funded
by AusAID.
- 2004 – Turned over TRACS to AusAID and Philippine government. Five cities were the recipients of
the project2005 – Developed Osiris 1.0 Framework in java. Primary aim was to design a system that needed to
be dynamic, scalable, secure, and highly maintainable. This was designed for a fast-growing money
remittance business with several branches scattered all over the Philippines.
- 2006 – Developed ETRACS using the new framework. ETRACS community edition to be distributed
for free for use for interested LGUs.
- 2007 - ETRACS Version 1.0 released for LGDP (Local Government Development Program), an AusAID
funded grant.
- 2009 – ETRACS Version 1.8 released for ISF-LAMP 2 (Innovative Support Fund - Land Administration
and Management Project) recipients also funded by AusAID.
- 2010 – ETRACS Version 2.0 release using a new framework - Osiris 2 Enterprise Framework TM. This
framework allows a much easier platform for developers based on previous experience and
feedback.
- 2012 – ETRACS Version 2.2 released for REGALA Project, a grant funded by ADB-JFPR (Asian
Development Bank - Japan Fund for Poverty Reduction). Simultaneously used for PRMF (Provincial
Road Management Facility) project funded by AusAID.
- 2013 – Improved Osiris 2 Framework to have integrated support and better security for cloud
technologies. This is in preparation for the citizen-centric applications that will be rolled out in the
next release.
- 2014 - Version 2.5. This release is cloud ready and introduces SMS functionality. <br />
<br />
<br />


ETRACS Setup
===

ETRACS is a multi-user system that spans several offices. It requires a local area network and
several computers connected per office that needs access to the server. For more
information on the hardware requirements please see hardware requirements section: <br />
<br />

![alt text][lan] <br />
<br />
<br />


Architecture
===

Osiris 2 Enterprise Framework TM is a multi-tiered framework that is composed of several layers
intended to be scalable and dynamic. Basically it is composed of three tiers – the client or
presentation, the business application or middle layer and the database layer. See diagram below: <br />
<br />

![alt text][architecture] <br />
<br />


<b>Client or Presentation Layer</b> – this is what users use to interact with the system and it could be any
computing device. It can be a desktop or workstation application, a web browser, a mobile
application, a kiosk or any device like card readers for example. The ETRACS program however at this
time is developed for the personal computer and uses the Osiris 2 Client Platform TM.

<b>Business Application Layer</b> – Also known as a middle layer, data collected from the client is
processed and acts as the go-between the client and data layer. Transactions are organized as
services and code is written in scripts, or a text-like programming language. Services can be accessed
by the client or even by another system using another programming language. This is commonly
referred to as a Service Oriented Architecture (SOA).

<b>Data Layer</b> - This is where data will be persisted or “saved” and commonly stored in relational
databases. However, data storage is not limited to relational databases. Data can also be stored in
other data formats like a document database and non-relational databases. However at this time,
ETRACS is stored in relational databases and an LGU has two options – MySQL or MS SQL Server.
There is planned support for other databases in the future but depends on the request of the LGU. <br />
<br />
<br />


Cloud Technology
===

Cloud technology is an exciting development in the computing space. Although the concept is not
entirely new, the tools are making it easy for developers to manage virtual data centers. It also
lowers the administration costs which are very expensive traditionally. This enables one to focus on
the solutions and not on maintenance. For example, additional server resources can be added
dynamically if high performance is needed at the click of a button.

This is a big deal for LGUs because it has always been the dream of most to allow citizens to transact
online like doing payments or to query the status of their properties. In order to do this at present,
an LGU needs a huge investment in data centers and monthly leased lines plus additional manpower
to develop applications and monitor transactions and security. The cost will not be able to outweigh
the benefits unless an LGU is probably big enough and their constituents technologically savvy
enough like large cities. The following diagram shows the cloud topology of ETRACS. <br />
<br />

![alt text][cloud] <br />
<br />


ETRACS 2.5 was designed to be integrated with the cloud which only requires sufficient internet
connection and a small subscription fee depending on the cloud service. This is not compulsory
however the service is available in ETRACS should the LGU wish to avail. The advantage of this
solution is that all data still resides in the server of the LGU and not on a central server. A *special
software* enables ETRACS to “talk” to the cloud applications that receive request for information.If there is no connectivity, for example internet connection is down, the server can send the reply at
a later time when connection is up and running. The services below show examples of cloud
solutions for ETRACS:

- SMS (Text messaging) capability to send notifications or receive inquiries from taxpayers
through text
- Online inquiry of real property status and billing
- Online application for business
- LGU to LGU payment (applicable to province and municipalities to allow taxpayer to pay real
property from another LGU)
- Real time approval of tax declarations (applicable for province and municipality)
- Online payment

This enables business-to-government, government-to-government and citizen-to-government
transactions to be possible. Another advantage is that LGUs do not have to worry about integration
with partners which requires tedious programming and testing, because integration is only done
once from the cloud. Any partner integrated in the cloud will automatically be available to all ETRACS
users. For example, when integrating with a bank, one will have to read the banks’ specifications and
write code for it and do testing for acceptance. If the LGU will do this by themselves, they will have to
do it for every bank they want to integrate with because each bank has different specifications. On
the other hand, if a bank is integrated with the cloud or any payment partner for that matter, this will
immediately be available to all ETRACS users without the LGU doing anything.

There have been many IT initiatives and huge investments made by the national government in the
past and in the present but because of the complexity and lack of product, having a comprehensive,
effective e-government is still far from being realized. ETRACS is not only a tool to improve collection
of LGUs, it is a product with a vision. By enabling capability to transact directly with the LGUs, ease of doing business will improve and corruption can be lessened or perhaps even eliminated. The ETRACS
mission is to innovate the government, one LGU at a time.










[lan]: ./images/1-a.png
[architecture]: ./images/1-b.png
[cloud]: ./images/1-c.png