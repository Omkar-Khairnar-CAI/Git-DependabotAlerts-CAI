
export const filterSchema = [
    {
      label: "Severity",
      type: "checkbox",
      options: ["low", "medium", "high", "critical"],
      colorScheme: "orange",
      stateHandler: "selectedSeverity", 
    },
    {
      label: "State",
      type: "checkbox",
      options: ["open", "dismissed", "fixed", "auto_dismissed"],
      colorScheme: "orange",
      stateHandler: "selectedState",
    },
    {
      label: "Ecosystem",
      type: "checkbox",
      options: [
        "npm",
        "pip",
        "go",
        "maven",
        "composer",
        "rubygems",
        "nuget",
        "pub",
        "rust",
      ],
      colorScheme: "orange",
      stateHandler: "selectedEcosystem",
    },
    {
      label: "Scope",
      type: "checkbox",
      options: ["development", "runtime"],
      colorScheme: "orange",
      stateHandler: "selectedScope",
    },
    {
      label: "Sort",
      type: "radio",
      options: ["asc", "desc"],
      colorScheme: "orange",
      stateHandler: "sortOrder",
    },
    
  ];

 
  