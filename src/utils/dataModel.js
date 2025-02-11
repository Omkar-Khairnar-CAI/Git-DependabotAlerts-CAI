export const getValue = (alert, param) => {
  if (param === null || param === undefined) return "";
  switch (param) {
    case "ecosystem":
      return alert.dependency.package.ecosystem;
    case "state":
      return alert.state;
    case "package_name":
      return alert.dependency.package.name;
    case "manifest_path":
      return alert.dependency.manifest_path;
    case "scope":
      return alert.dependency.scope;
    case "cvss_score":
      return alert.security_advisory.cvss.score;
    case "cvss_v3_score":
      return alert.security_advisory.cvss_severities.cvss_v3.score;
    case "cvss_v4_score":
      return alert.security_advisory.cvss_severities.cvss_v4.score;
    case "epss_percentage":
      return alert.security_advisory.epss[0].percentage || 0;
    case "severity":
      return alert.security_advisory.severity;
    case "created_at":
      return alert.created_at;
    case "updated_at":
      return alert.updated_at;
    case "dismissed_at":
      return alert.dismissed_at;
    case "repository_name":
      return alert.repository.name;
    default:
      return "";
  }
};

// return array of graph data points
export const mapToGraphData = (alerts, param1, param2, param3 = null) => {
    return alerts.map(alert => {
        console.log("Extracting these values from alert object", alert.number);
        console.log("param1", param1);
        console.log("param2", param2);
        console.log("param3", param3);
        const x = getValue(alert, param1);
        const y = getValue(alert, param2);
        const z = param3 ? getValue(alert, param3) : null;

        return param3 ? { x, y, z } : { x, y };// return object with x, y and z values
    });
}

export const mapToStackedBarChartData = (alerts, param) => {
  const groupedData = {};

  alerts.forEach((alert) => {
    const paramVal = getValue(alert, param) || "All"; // Default value is all
    const severity = (getValue(alert, "severity") || "").toLowerCase();

    if (!groupedData[paramVal]) {
      groupedData[paramVal] = {
        name: paramVal,
        low: 0,
        medium: 0,
        high: 0,
        critical: 0,
      };
    }

    switch (severity) {
      case "low":
        groupedData[paramVal].low += 1;
        break;
      case "medium":
        groupedData[paramVal].medium += 1;
        break;
      case "high":
        groupedData[paramVal].high += 1;
        break;
      case "critical":
        groupedData[paramVal].critical += 1;
        break;
      default:
        console.warn(`Unknown severity level: ${severity}`);
        break;
    }
  });

  return Object.values(groupedData).sort((a, b) =>
    a.name.localeCompare(b.name)
  ); // Optional sorting
};

export const mapPieChartData = (alerts, param) => {
  const groupedData = {};

  alerts.forEach((alert) => {
    const paramVal = getValue(alert, param) || "Unknown"; // Default value for missing data

    // Group by the parameter value
    if (!groupedData[paramVal]) {
      groupedData[paramVal] = 0;
    }

    // Increment the count for this group
    groupedData[paramVal] += 1;
  });

  // Convert the grouped data into the format needed for the Pie Chart
  const pieChartData = Object.entries(groupedData).map(([name, value]) => ({
    name,
    value,
  }));

  return pieChartData;
};

// {name:'dummy1', totalAlerts:'20', critical:'10', low:'5', medium:'5', high:'10', lastUpdated:'12/12/2024'},

export const getTableData = (alerts)=>{
    const groupedData={};
    alerts.forEach((alert)=>{
        if(!groupedData[alert.repository.name]){
            groupedData[alert.repository.name]={
                name:alert.repository.name,
                totalAlerts:0,
                critical:0,
                low:0,
                medium:0,
                high:0,
                lastUpdated:''
            }
        }
        groupedData[alert.repository.name].totalAlerts += 1;
        const severity = (getValue(alert, "severity") || "").toLowerCase();
        switch (severity) {
            case "low":
              groupedData[alert.repository.name].low += 1;
              break;
            case "medium":
              groupedData[alert.repository.name].medium += 1;
              break;
            case "high":
              groupedData[alert.repository.name].high += 1;
              break;
            case "critical":
              groupedData[alert.repository.name].critical += 1;
              break;
            default:
              console.warn(`Unknown severity level: ${severity}`);
              break;
          }

          if(groupedData[alert.repository.name].lastUpdated ===''){
            groupedData[alert.repository.name].lastUpdated = new Date(alert.updated_at).toLocaleString();
          }
          else if(new Date(alert.updated_at) > new Date(groupedData[alert.repository.name].lastUpdated)){
            groupedData[alert.repository.name].lastUpdated = new Date(alert.updated_at).toLocaleString();
          } 
    })

    const data = Object.entries(groupedData).map(([name, value])=>{
        return value
    })

    return data;

}
