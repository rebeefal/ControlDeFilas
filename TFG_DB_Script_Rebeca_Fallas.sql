USE [master]
GO
/****** Object:  Database [db_branch_department]    Script Date: 11/22/2022 11:10:10 PM ******/
CREATE DATABASE [db_branch_department]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'db_branch_department', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\db_branch_department.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'db_branch_department_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\db_branch_department_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [db_branch_department] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [db_branch_department].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [db_branch_department] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [db_branch_department] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [db_branch_department] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [db_branch_department] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [db_branch_department] SET ARITHABORT OFF 
GO
ALTER DATABASE [db_branch_department] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [db_branch_department] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [db_branch_department] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [db_branch_department] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [db_branch_department] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [db_branch_department] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [db_branch_department] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [db_branch_department] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [db_branch_department] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [db_branch_department] SET  DISABLE_BROKER 
GO
ALTER DATABASE [db_branch_department] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [db_branch_department] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [db_branch_department] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [db_branch_department] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [db_branch_department] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [db_branch_department] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [db_branch_department] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [db_branch_department] SET RECOVERY FULL 
GO
ALTER DATABASE [db_branch_department] SET  MULTI_USER 
GO
ALTER DATABASE [db_branch_department] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [db_branch_department] SET DB_CHAINING OFF 
GO
ALTER DATABASE [db_branch_department] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [db_branch_department] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [db_branch_department] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [db_branch_department] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
EXEC sys.sp_db_vardecimal_storage_format N'db_branch_department', N'ON'
GO
ALTER DATABASE [db_branch_department] SET QUERY_STORE = OFF
GO
USE [db_branch_department]
GO
/****** Object:  User [user]    Script Date: 11/22/2022 11:10:10 PM ******/
CREATE USER [user] WITHOUT LOGIN WITH DEFAULT_SCHEMA=[dbo]
GO
/****** Object:  User [branch_department]    Script Date: 11/22/2022 11:10:10 PM ******/
CREATE USER [branch_department] FOR LOGIN [branch_department] WITH DEFAULT_SCHEMA=[dbo]
GO
ALTER ROLE [db_owner] ADD MEMBER [branch_department]
GO
ALTER ROLE [db_accessadmin] ADD MEMBER [branch_department]
GO
ALTER ROLE [db_securityadmin] ADD MEMBER [branch_department]
GO
ALTER ROLE [db_ddladmin] ADD MEMBER [branch_department]
GO
ALTER ROLE [db_backupoperator] ADD MEMBER [branch_department]
GO
ALTER ROLE [db_datareader] ADD MEMBER [branch_department]
GO
ALTER ROLE [db_datawriter] ADD MEMBER [branch_department]
GO
ALTER ROLE [db_denydatareader] ADD MEMBER [branch_department]
GO
ALTER ROLE [db_denydatawriter] ADD MEMBER [branch_department]
GO
/****** Object:  Table [dbo].[branch]    Script Date: 11/22/2022 11:10:10 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[branch](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[branch_name] [varchar](50) NULL,
	[ip] [varchar](50) NOT NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[branch_department]    Script Date: 11/22/2022 11:10:10 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[branch_department](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[branch_department_id] [varchar](2) NOT NULL,
	[department_id] [int] NULL,
	[branch_id] [int] NULL,
	[branch_name] [varchar](50) NULL,
	[department_name] [varchar](50) NULL,
	[window] [varchar](5) NULL,
	[department_letter] [varchar](5) NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[department]    Script Date: 11/22/2022 11:10:10 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[department](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[department_name] [varchar](50) NULL,
	[department_letter] [varchar](5) NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[queue_client]    Script Date: 11/22/2022 11:10:10 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[queue_client](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[branch_department_id] [varchar](2) NOT NULL,
	[client_number] [int] NULL,
	[branch_id] [int] NULL,
	[department_id] [int] NULL,
	[window] [varchar](5) NULL,
	[department_letter] [varchar](5) NULL
) ON [PRIMARY]
GO
USE [master]
GO
ALTER DATABASE [db_branch_department] SET  READ_WRITE 
GO
