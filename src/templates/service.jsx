import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import { MdOutlinePhoneForwarded,MdOutlineSettingsSuggest} from "react-icons/md";
import { PiNetwork,PiCodeBold } from "react-icons/pi";
import { TbDatabaseSearch,TbCloudDataConnection,TbShieldCheckFilled } from "react-icons/tb";

const iconMap = {
  PiNetwork: <PiNetwork size={120} />,
  PiCodeBold: <PiCodeBold size={120} />,
  TbCloudDataConnection: <TbCloudDataConnection size={120} />,
  TbShieldCheckFilled: <TbShieldCheckFilled size={120} />,
  MdOutlinePhoneForwarded: <MdOutlinePhoneForwarded size={120} />,
  MdOutlineSettingsSuggest: <MdOutlineSettingsSuggest size={120} />,
  TbDatabaseSearch: <TbDatabaseSearch size={120} />,
  // inne mapowania...
}

const ServiceTemplate = ({ pageContext }) => {
  const { shortTitle,title, description, icon } = pageContext
  return (
    <>
      <Seo title={shortTitle} description={title} />
      <Layout>
        <main>
            <h1>{title}</h1>
            <div dangerouslySetInnerHTML={{ __html: description }} />
            {iconMap[icon]}
            {/* inne dane */}
        </main>
      </Layout>
    </>
      
  )
}

export default ServiceTemplate