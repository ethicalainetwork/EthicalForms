import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';

const SPREADSHEET_ID = process.env.REACT_APP_SPREADSHEET_ID;
const SHEET_ID = process.env.REACT_APP_SHEET_ID;
const GOOGLE_CLIENT_EMAIL = process.env.REACT_APP_GOOGLE_CLIENT_EMAIL;
const GOOGLE_SERVICE_PRIVATE_KEY = process.env.REACT_APP_GOOGLE_SERVICE_PRIVATE_KEY;

const serviceAccountAuth = new JWT({
  email: GOOGLE_CLIENT_EMAIL,
  key: GOOGLE_SERVICE_PRIVATE_KEY.replace(/\\n/g, "\n"),
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const doc = new GoogleSpreadsheet(SPREADSHEET_ID, serviceAccountAuth);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    await doc.loadInfo();
    const sheet = doc.sheetsById[SHEET_ID];

    const { 
      email,
      domain,
      businessProblems,
      aiApplications,
      aiUsageDuration,
      operatingCountries,
      foundationModels,
      modelDevelopment,
      algorithms,
      modelUpdateFrequency,
      dataTypes,
      dataSources,
      dataQualityMethods,
      dataPrivacyMeasures,
      publicAPIs,
      publicAIServices,
      securityMeasures,
      dataCenterLocations,
      cloudServices,
      infrastructureScale,
      scalabilityMeasures,
      ethicalGuidelines,
      biasFairnessMeasures,
      governanceStructures,
      futurePlans,
      upcomingProjects,
      aiFutureRole
    } = req.body;

    const rowToAdd = {
      Email: email,
      Date: new Date().toLocaleString(),
      Domain: domain,
      BusinessProblems: businessProblems,
      AIApplications: aiApplications,
      AIUsageDuration: aiUsageDuration,
      OperatingCountries: operatingCountries,
      FoundationModels: foundationModels,
      ModelDevelopment: modelDevelopment,
      Algorithms: algorithms,
      ModelUpdateFrequency: modelUpdateFrequency,
      DataTypes: dataTypes,
      DataSources: dataSources,
      DataQualityMethods: dataQualityMethods,
      DataPrivacyMeasures: dataPrivacyMeasures,
      PublicAPIs: publicAPIs,
      PublicAIServices: publicAIServices,
      SecurityMeasures: securityMeasures,
      DataCenterLocations: dataCenterLocations,
      CloudServices: cloudServices,
      InfrastructureScale: infrastructureScale,
      ScalabilityMeasures: scalabilityMeasures,
      EthicalGuidelines: ethicalGuidelines,
      BiasFairnessMeasures: biasFairnessMeasures,
      GovernanceStructures: governanceStructures,
      FuturePlans: futurePlans,
      UpcomingProjects: upcomingProjects,
      AIFutureRole: aiFutureRole
    };

    await sheet.addRow(rowToAdd);

    res.status(200).json({ result: 'success' });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: e.message });
  }
}