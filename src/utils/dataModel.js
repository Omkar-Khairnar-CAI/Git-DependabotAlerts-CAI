
export const getValue = (alert, param) =>{
    if(param === null || param === undefined) return "";
    switch(param){
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
}


// return array of graph data points
export const mapToGraphData = (alerts, param1, param2, param3 = null) => {
    return alerts.map(alert => {
        console.log("EExtracting these values from alert object", alert.number);
        console.log("param1", param1);
        console.log("param2", param2);
        console.log("param3", param3);
        const x = getValue(alert, param1);
        const y = getValue(alert, param2);
        const z = param3 ? getValue(alert, param3) : null;

        return param3 ? { x, y, z } : { x, y };// return object with x, y and z values
    });
}

export const mapToStackedBarChartDat = (alerts, param) => {
    const groupedData = {};

    alerts.forEach(alert => {
        const paramVal = getValue(alert, param);
        const severity = getValue(alert, "severity");

        if (!groupedData[paramVal]) {
            groupedData[paramVal] = { name: paramVal, low: 0, medium: 0, high: 0, critical: 0 };
        }

        switch (severity.toLowerCase()) {
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
                }
            });
            return Object.values(groupedData);
};
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
    
