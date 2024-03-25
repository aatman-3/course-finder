import "./App.css";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Services from "./components/Services/Services";
import Section from "./components/Section/Section";
import StepsTodo from "./components/StepsTodo/StepsTodo";
import Webinars from "./components/Webinars/Webinars";
import Testimonials from "./components/Testimonials/Testimonials";
import Updates from "./components/Updates/Updates";
import Footer from "./components/Footer/Footer";

import { homePageConfig } from "./utils/config";
import { IsMobileProvider } from "./contexts/IsMobileContext";

function App() {
  return (
    <IsMobileProvider>
      <div className="App">
        {homePageConfig?.data?.map((component) => {
          switch (component.componentType) {
            case "Header": {
              return <Header key={component.key} config={component.config} />;
            }
            case "Banner": {
              return <Banner key={component.key} config={component.config} />;
            }
            case "Services": {
              return (
                <Section key={component.key} config={component.config}>
                  <Services config={component.config} />
                </Section>
              );
            }
            case "StepsTodo": {
              return (
                <Section key={component.key} config={component.config}>
                  <StepsTodo config={component.config} />
                </Section>
              );
            }
            case "Webinars": {
              return (
                <Section key={component.key} config={component.config}>
                  <Webinars config={component.config} />
                </Section>
              );
            }
            case "Testimonials": {
              return (
                <Section key={component.key} config={component.config}>
                  <Testimonials config={component.config} />
                </Section>
              );
            }
            case "Updates": {
              return (
                <Section key={component.key} config={component.config}>
                  <Updates config={component.config} />
                </Section>
              );
            }
            case "Footer": {
              return <Footer key={component.key} config={component.config} />;
            }
            default: {
              return <></>;
            }
          }
        })}
      </div>
    </IsMobileProvider>
  );
}

export default App;
