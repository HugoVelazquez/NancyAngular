using Nancy.Conventions;

namespace Nancy.App
{
    public class Bootstrapper : DefaultNancyBootstrapper
    {
        /// <summary>
        /// Se sobreescriben las convenciones para mapear una carpeta
        /// </summary>
        /// <param name="nancyConventions">Configuracionde Nancy</param>
        protected override void ConfigureConventions(NancyConventions nancyConventions)
        {
            base.ConfigureConventions(nancyConventions);
#if DEBUG
            StaticConfiguration.Caching.EnableRuntimeViewDiscovery = true;
            StaticConfiguration.Caching.EnableRuntimeViewUpdates = true;
            nancyConventions.StaticContentsConventions.AddDirectory("node_modules", null, "js");
#endif
        }
    }
}