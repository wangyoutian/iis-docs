var adminManager = new ActiveXObject('Microsoft.ApplicationHost.WritableAdminManager');
adminManager.CommitPath = "MACHINE/WEBROOT/APPHOST";

var sitesSection = adminManager.GetAdminSection("system.applicationHost/sites", "MACHINE/WEBROOT/APPHOST");
var siteDefaultsElement = sitesSection.ChildElements.Item("siteDefaults");
var ftpServerElement = siteDefaultsElement.ChildElements.Item("ftpServer");

var securityElement = ftpServerElement.ChildElements.Item("security");
var sslElement = securityElement.ChildElements.Item("ssl");
   sslElement.Properties.Item("controlChannelPolicy").Value = "SslAllow";
   sslElement.Properties.Item("dataChannelPolicy").Value = "SslAllow";
   sslElement.Properties.Item("serverCertHash").Value = "57686f6120447564652c2049495320526f636b73";
   
var authenticationElement = securityElement.ChildElements.Item("authentication");
var clientCertAuthenticationElement = authenticationElement.ChildElements.Item("clientCertAuthentication");
   clientCertAuthenticationElement.Properties.Item("enabled").Value = true;
   
var sslClientCertificatesElement = securityElement.ChildElements.Item("sslClientCertificates");
   sslClientCertificatesElement.Properties.Item("clientCertificatePolicy").Value = "CertIgnore";
   sslClientCertificatesElement.Properties.Item("useActiveDirectoryMapping").Value = true;

adminManager.CommitChanges();