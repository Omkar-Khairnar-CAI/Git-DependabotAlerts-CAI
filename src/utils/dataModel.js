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

        const x = getValue(alert, param1);
        const y = getValue(alert, param2);
        const z = param3 ? getValue(alert, param3) : null;

        return param3 ? { x, y, z } : { x, y };// return object with x, y and z values
    });
}


export const mapToStackedBarChartData = (alerts, param) => {
        const groupedData = {};
    
        alerts.forEach(alert => {
            const paramVal = getValue(alert, param) || "All"; // Default value is all
            const severity = (getValue(alert, "severity") || "").toLowerCase();
    
            if (!groupedData[paramVal]) {
                groupedData[paramVal] = { name: paramVal, low: 0, medium: 0, high: 0, critical: 0 };
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
    
        return Object.values(groupedData).sort((a, b) => a.name.localeCompare(b.name)); // Optional sorting
    };

    export const mapToStackedBarChartData2 = (alerts, param) => {
        const groupedData = {};
    
        alerts.forEach(alert => {
            const repoName = alert.repository?.name || "Unknown Repo";
            const paramValue = getValue(alert, param) || "Unknwnwn"; // Get selected param value
    
            if (!groupedData[repoName]) {
                groupedData[repoName] = { repository: repoName };
            }
    
            // Dynamically count occurrences of each unique param value
            groupedData[repoName][paramValue] = (groupedData[repoName][paramValue] || 0) + 1;
        });
    
        return Object.values(groupedData);
    };
    
    


    export const mapToScatterChartData = (alerts, param, selectedYear) => {
        // Initialize with all 12 months to ensure fixed X-axis
        const allMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const groupedData = allMonths.reduce((acc, month) => {
            acc[month] = { month, low: 0, medium: 0, high: 0, critical: 0 };
            return acc;
        }, {});
    
        alerts.forEach(alert => {
            const date = new Date(alert.created_at);
            const alertYear = date.getFullYear();
            const month = date.toLocaleString('default', { month: 'short' }); // "Jan", "Feb", etc.
            const severity = (getValue(alert, "severity") || "").toLowerCase();
    
            // Filter alerts by selected year
            if (alertYear === selectedYear) {
                switch (severity) {
                    case "low":
                        groupedData[month].low += 1;
                        break;
                    case "medium":
                        groupedData[month].medium += 1;
                        break;
                    case "high":
                        groupedData[month].high += 1;
                        break;
                    case "critical":
                        groupedData[month].critical += 1;
                        break;
                }
            }
        });
    
        return Object.values(groupedData);
    };

    export const mapToLineChartData = (alerts, param, selectedYear) => {
        console.log(selectedYear);
        const allMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        
        // Initialize with default values
        const groupedData = allMonths.map(month => ({
            month,
            low: 0,
            medium: 0,
            high: 0,
            critical: 0
        }));
    
        alerts.forEach(alert => {
            const date = new Date(alert.created_at);
            const alertYear = date.getFullYear();
            const month = date.toLocaleString('default', { month: 'short' }); // Convert date to "Jan", "Feb", etc.
            const severity = (alert.security_advisory?.severity || "").toLowerCase();
    
            // Ensure alert is from the selected year
            if (alertYear == selectedYear) {
                const monthIndex = allMonths.indexOf(month);
                if (monthIndex !== -1) {
                    groupedData[monthIndex][severity] += 1;
                }
            }
        });
    
        return groupedData;
    };


    export const mapPieChartData = (alerts, param) => {
        const groupedData = {};
      
        alerts.forEach((alert) => {
          const paramVal = getValue(alert, param) || "Unknown"; 
      
          if (!groupedData[paramVal]) {
            groupedData[paramVal] = 0;
          }
      
          groupedData[paramVal] += 1;
        });
      
        const pieChartData = Object.entries(groupedData).map(([name, value]) => ({
          name,
          value,
        }));
      
        return pieChartData;
      };
      
      
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

    
    
