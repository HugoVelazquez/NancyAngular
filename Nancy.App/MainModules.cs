using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;

namespace Nancy.App
{
    public class MainModules : NancyModule
    {
        public MainModules(IRootPathProvider pathProvider)
        {
            Get[@"/"] = parameters =>
            {
                return Response.AsFile("src/index.html", "text/html");
            };

            Get[@"/{file*}"] = (parameters) =>
            {
                if (Path.HasExtension(parameters.file))
                {
                    var path = Path.Combine(pathProvider.GetRootPath(), "src", ((string)parameters.file).Replace('/', '\\'));

                    if (File.Exists(path))
                    {
                        return Response.AsFile(Path.Combine("src", (string)parameters.file));
                    }
                    else
                    {
                        return HttpStatusCode.NotFound;
                    }
                }

                return Response.AsFile("src/index.html", "text/html");
            };
        }
    }
}