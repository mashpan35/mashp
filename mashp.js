@@ -1,87 +1,87 @@
<?xml version="1.0" encoding="UTF-8"?>
<MD_Metadata
 xmlns="http://www.isotc211.org/2005/gmd"
 xmlns:gco="http://www.isotc211.org/2005/gco"
 xmlns:gts="http://www.isotc211.org/2005/gts"
 xmlns:gss="http://www.isotc211.org/2005/gss"
 xmlns:gsr="http://www.isotc211.org/2005/gsr"
 xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
 xmlns:xlink="http://www.w3.org/1999/xlink"
 xmlns:gml="http://www.opengis.net/gml"
 xsi:schemaLocation="http://www.isotc211.org/2005/gmd http://www.isotc211.org/schemas/2005/gmd/gmd.xsd">
  <contact>
    <CI_ResponsibleParty>
      <organisationName>
        <gco:CharacterString>Open Geospatial Consortium</gco:CharacterString>
      </organisationName>
      <role>
        <CI_RoleCode codeList="http://www.tc211.org/ISO19139/resources/codeList.xml#CI_RoleCode" codeListValue="originator">originator</CI_RoleCode>
      </role>
    </CI_ResponsibleParty>
  </contact>
  <dateStamp>
    <gco:Date>2009-03-17</gco:Date>
  </dateStamp>
  <spatialRepresentationInfo>
    <MD_VectorSpatialRepresentation>
      <geometricObjects>
        <MD_GeometricObjects>
          <geometricObjectType>
            <MD_GeometricObjectTypeCode codeList="http://www.tc211.org/ISO19139/resources/codeList.xml#MD_GeometricObjectTypeCode" codeListValue="point">point</MD_GeometricObjectTypeCode>
          </geometricObjectType>
        </MD_GeometricObjects>
      </geometricObjects>
    </MD_VectorSpatialRepresentation>
  </spatialRepresentationInfo>
  <identificationInfo>
    <MD_DataIdentification>
      <citation>
        <CI_Citation>
          <title>
            <gco:CharacterString>CITE Autos</gco:CharacterString>
          </title>
          <date>
            <CI_Date>
              <date>
                <gco:Date>2009-01-07</gco:Date>
              </date>
              <dateType>
                <CI_DateTypeCode codeList="http://www.tc211.org/ISO19139/resources/codeList.xml#CI_DateTypeCode" codeListValue="creation">creation</CI_DateTypeCode>
              </dateType>
            </CI_Date>
          </date>
        </CI_Citation>
      </citation>
      <abstract>
        <gco:CharacterString>This is the cite:Autos layer from the test dataset for the TIME dimension tests in the CITE WMS 1.3.0 test suite.  It contains points representing automobile locations at different points in time.</gco:CharacterString>
      </abstract>
      <language>
        <gco:CharacterString>eng</gco:CharacterString>
      </language>
      <topicCategory>
        <MD_TopicCategoryCode>location</MD_TopicCategoryCode>
      </topicCategory>
      <extent>
        <EX_Extent>
          <geographicElement>
            <EX_GeographicBoundingBox>
              <westBoundLongitude>
                <gco:Decimal>-0.00342</gco:Decimal>
              </westBoundLongitude>
              <eastBoundLongitude>
                <gco:Decimal>0.0029</gco:Decimal>
              </eastBoundLongitude>
              <southBoundLatitude>
                <gco:Decimal>-0.0022</gco:Decimal>
              </southBoundLatitude>
              <northBoundLatitude>
                <gco:Decimal>0.0022</gco:Decimal>
              </northBoundLatitude>
            </EX_GeographicBoundingBox>
          </geographicElement>
        </EX_Extent>
      </extent>
    </MD_DataIdentification>
  </identificationInfo>
</MD_Metadata>
