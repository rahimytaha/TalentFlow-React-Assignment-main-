import React, { useEffect } from 'react'
import Header from '../Header'
import FeatureComparison from '../FeatureComparison'
import PricingPlans from '../PricingPlans'
import TalentFlowCTA from '../TalentFlowCTA'
import Footer from '../Footer'

function PricingPage() {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
    return (
        <div id="pricing-top">
            <Header />
            <PricingPlans />
            <FeatureComparison />
            <TalentFlowCTA />
            <Footer />
        </div>
    )
}

export default PricingPage

