
export const filterSchema = [
    {
      label: "Severity",
      key:'severity',
      type: "checkbox",
      options: ["low", "medium", "high", "critical"],
      colorScheme: "orange",
      stateHandler: "selectedSeverity", 
    },
    {
      label: "State",
      key:'state',
      type: "checkbox",
      options: ["open", "dismissed", "fixed", "auto_dismissed"],
      colorScheme: "orange",
      stateHandler: "selectedState",
    },
    {
      label: "Ecosystem",
      key:'ecosystem',
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
      key:'scope',
      type: "checkbox",
      options: ["development", "runtime"],
      colorScheme: "orange",
      stateHandler: "selectedScope",
    },
    {
      label: "Sort",
      key:'direction',
      type: "radio",
      options: ["asc", "desc"],
      colorScheme: "orange",
      stateHandler: "direction",
    },
    
  ];

  export const initialFiltersValues = {
    severity: [],
    state: [],
    ecosystem: [],
    scope: [],
    direction: "desc",
  }