using System;
using System.Text;
using Microsoft.Web.Administration;

internal static class Sample
{
   private static void Main()
   {
      using(ServerManager serverManager = new ServerManager())
      { 
         Configuration config = serverManager.GetWebConfiguration("Default Web Site");
         ConfigurationSection staticContentSection = config.GetSection("system.webServer/staticContent");

         ConfigurationElement clientCacheElement = staticContentSection.GetChildElement("clientCache");
         clientCacheElement["cacheControlMode"] = @"UseExpires";
         clientCacheElement["httpExpires"] = @"Tue, 19 Jan 2038 03:14:07 GMT";

         serverManager.CommitChanges();
      }
   }
}