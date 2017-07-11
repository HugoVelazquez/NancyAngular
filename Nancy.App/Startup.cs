using Owin;
using Nancy.Owin;
using Microsoft.Owin.Extensions;

namespace Nancy.App
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            app.UseNancy();

            // Add file mapping
            app.UseStageMarker(PipelineStage.MapHandler);
        }
    }
}