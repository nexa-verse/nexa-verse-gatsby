import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import { MdOutlinePhoneForwarded,MdOutlineSettingsSuggest, MdOutlineArrowBackIosNew} from "react-icons/md";
import { PiNetwork,PiCodeBold } from "react-icons/pi";
import { TbDatabaseSearch,TbCloudDataConnection,TbShieldCheckFilled } from "react-icons/tb";

import signet from "../images/signet.png";
import Button from "../components/reusable/Button";
import { Link } from "gatsby";

const iconMap = {
  PiNetwork: <PiNetwork size={120} className="service-template__icon"/>,
  PiCodeBold: <PiCodeBold size={120} className="service-template__icon"/>,  
  TbCloudDataConnection: <TbCloudDataConnection size={120} className="service-template__icon"/>,
  TbShieldCheckFilled: <TbShieldCheckFilled size={120} className="service-template__icon"/>,
  MdOutlinePhoneForwarded: <MdOutlinePhoneForwarded size={120} className="service-template__icon"/>,
  MdOutlineSettingsSuggest: <MdOutlineSettingsSuggest size={120} className="service-template__icon"/>,
  TbDatabaseSearch: <TbDatabaseSearch size={120} className="service-template__icon" />,
  // inne mapowania...
}


const ServiceTemplate = ({ pageContext }) => {
  const { shortTitle,title, description, icon } = pageContext
  return (
    <>
      <Seo title={shortTitle} description={title} />
      <Layout>
        <main className="service-template" style={{ ['--signet-url']: `url(${signet})` }}>
            {iconMap[icon]}
            <h1 className="subheadline">{shortTitle}</h1>
            <h2 className="text-buttons">{title}</h2>
            <div className="service-template__desc" dangerouslySetInnerHTML={{ __html: description }} />
            {/* inne dane */}
            <Link to="/uslugi">
              <Button icon={<MdOutlineArrowBackIosNew/>} modifier='filled' type="submit" color='accent'>Zobacz inne usługi!</Button>
            </Link>
        </main>
      </Layout>
    </>
      
  )
}

export default ServiceTemplate