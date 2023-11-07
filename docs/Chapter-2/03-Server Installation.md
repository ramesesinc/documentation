## Server Installation

### Installing Databases

E-TRACS supports majority of the available RDBMS in the market both
commercial and open-source. The MySQL 5.0 Database Server is the default
supported database for open-source while MS SQL Server is for the
commercial market.

#### MySQL Database

To install MySQL 5.0.

1.  Double-click on the Installers/ MYSQL5.EXE file and then click
    **Next**.
![image|512x397,100%](images\image4.png)
<!-- > <img src="images\image4.png" style="width:2.6403in;height:1.98934in" /> -->

2.  Choose the Installation Type. There are three installation types
    available: **Typical**, **Complete**, and **Custom**.
![image|512x397,100%](images\image5.png)
<!-- > <img src="images\image5.png" style="width:2.6403in;height:1.99507in" /> -->
>
> The **Typical** installation type installs the MySQL server, the mysql
> command-line client, and the command-line utilities. The command-line
> clients and utilities include mysqldump, myisamchk, and several other
> tools to help you manage the MySQL server.
>
> The **Complete** installation type installs all components included in
> the installation package. The full installation package includes
> components such as the embedded server library, the benchmark suite,
> support scripts, and documentation.

3.  Select Typical and click **Next**.

![image|512x397,100%](images\image6.png)
<!-- > <img src="images\image6.png" style="width:2.6462in;height:2.01537in" /> -->

4.  Click **Install** on the confirmation screen to start the
    installation process. After successfully installing MySQL, the
    Instance Configuration Wizard is shown.

![image|512x397,100%](images\image7.png)
<!-- > <img src="images\image7.png" style="width:2.6462in;height:2.01537in" /> -->

5.  Click **Next** to specify the **configuration type**.

![image|512x397,100%](images\image8.png)
<!-- > <img src="images\image8.png" style="width:2.67154in;height:2.04195in" /> -->

6.  Select the Detailed Configuration and then click **Next**.

![image|512x397,100%](images\image9.png)
<!-- > <img src="images\image9.png" style="width:2.66704in;height:2.0362in" /> -->

7.  Select Server Machine and then click **Next**.

![image|512x397,100%](images\image10.png)
<!-- > <img src="images\image10.png" style="width:2.67154in;height:2.04195in" /> -->

8.  Select Transactional Databases Only and then click **Next**.

![image|512x397,100%](images\image11.png)
<!-- > <img src="images\image11.png" style="width:2.67746in;height:2.04195in" /> -->

9.  Select the drive and path where to store the InnoDB Tablespace and
    then click **Next**.

![image|512x397,100%](images\image12.png)
<!-- > <img src="images\image12.png" style="width:2.67746in;height:2.04195in" /> -->

10. On the Networking Options screen, make sure that the Enable TCP/IP
    Networking and Enable Strict Mode options are checked and then click
    **Next**.

![image|512x397,100%](images\image13.png)
<!-- > <img src="images\image13.png" style="width:2.68788in;height:2.04662in" /> -->

11. Select the Standard Character Set and then click **Next**.

![image|512x397,100%](images\image14.png)
<!-- > <img src="images\image14.png" style="width:2.68196in;height:2.04662in" /> -->

12. On the Windows Option, check the Install as Windows Service and the
    Include Bin Directory in Windows PATH options and then click
    **Next**.

![image|512x397,100%](images\image15.png)
<!-- > <img src="images\image15.png" style="width:2.67154in;height:2.0362in" /> -->

13. Specify the Passwords and then click **Next**.

![image|512x397,100%](images\image16.png)
<!-- > <img src="images\image16.png" style="width:2.68788in;height:2.04662in" /> -->

14. Click **Execute** to configure the MySQL Database Server.

### Installing ETRACS Server

The **ETRACS Server Installer** is a self-extracting file that installs
the complete server system.

1.  Double-click on **etracs25-server-setup.exe**. This will display the
    installation wizard screen.

![image|512x397,100%](images\image17.png)
<!-- > <img src="images\image17.png" style="width:2.66113in;height:2.06745in" /> -->

2.  Click **Next** to display the License Agreement screen.

![image|512x397,100%](images\image18.png)
<!-- > <img src="images\image18.png" style="width:2.66704in;height:2.06745in" /> -->

3.  Select the **I accept the agreement** and click **Next**.

![image|512x397,100%](images\image19.png)
<!-- > <img src="images\image19.png" style="width:2.68196in;height:2.07842in" /> -->

4.  Select the LGU Type. The options are City, Province and Municipality
    and then click **Next**.

![image|512x397,100%](images\image20.png)
<!-- > <img src="images\image20.png" style="width:2.68196in;height:2.07266in" /> -->

5.  Enter the required information and then click **Next**.

![image|512x397,100%](images\image21.png)
<!-- > <img src="images\image21.png" style="width:2.67746in;height:2.09349in" /> -->

6.  On the database information, enter the required information

    1.  Connection – Select **MySQL**. This is currently supported

    2.  Host – the address of the database server

    3.  Username – the database username to use. The user must have
        administrative rights.

    4.  Password – the password of the database user

    5.  Name – the name of the database

7.  Click Next to display the App Host Information screen.

![image|512x397,100%](images\image22.png)
<!-- > <img src="images\image22.png" style="width:2.67154in;height:2.07842in" /> -->

8.  Enter the actual server IP address on the Host field and then click
    **Next**.

![image|512x397,100%](images\image23.png)
<!-- > <img src="images\image23.png" style="width:2.68196in;height:2.08307in" /> -->

9.  The default destination location is on the C:\\temp directory. If
    the server is to be installed on another location, click Browse and
    select the target destination. Once done click **Next**.

![image|512x397,100%](images\image24.png)
<!-- > <img src="images\image24.png" style="width:2.67154in;height:2.06745in" /> -->

10. On the Start Menu Folder option, just accept the default location
    and click **Next**.

![image|512x397,100%](images\image25.png)
<!-- > <img src="images\image25.png" style="width:2.67746in;height:2.07842in" /> -->

11. Click **Install** on the Ready to Install screen to start the
    installation process. Do not close any screen opened by the
    installer. Wait until the installation is complete.

![image|512x397,100%](images\image26.png)
<!-- > <img src="images\image26.png" style="width:2.67154in;height:2.07842in" /> -->

12. Click **Finish** to close the installation wizard screen.

## Running the ETRACS Server

To run the E-TRACS Server, double-click the **Osiris3 Server** shortcut
located on the desktop.

![image|512x397,100%](images\image27.png)
<!-- <img src="images\image27.png" style="width:4.22559in;height:2.1378in" /> -->