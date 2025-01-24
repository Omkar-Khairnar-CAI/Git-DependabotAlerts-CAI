// Static filter options
const SEVERITY_OPTIONS = ['critical', 'high', 'medium', 'low'];
const ECOSYSTEM_OPTIONS = ['npm', 'pip', 'go', 'maven', 'composer', 'rubygems', 'nuget', 'pub', 'rust'];
const SCOPE_OPTIONS = ['runtime', 'development'];
const STATE_OPTIONS = ['open', 'fixed', 'dismissed', 'auto_dismissed'];

export const filterConfig = [
   {
    key : 'severities',
    path: 'security_advisory.severity',
    label: 'Severity',
    enabled: true,
    apiParam: 'severity',
    options: SEVERITY_OPTIONS
  },
  {
    key : 'ecosystems',
    path: 'dependency.package.ecosystem',
    label: 'Ecosystem',
    enabled: true,
    apiParam: 'ecosystem',
    options: ECOSYSTEM_OPTIONS
  },
  {
    key : 'scopes',
    path: 'dependency.scope',
    label: 'Scope',
    enabled: true,
    apiParam: 'scope',
    options: SCOPE_OPTIONS
  },
  {
    key : 'states',
    path: 'state',
    label: 'State',
    enabled: true,
    apiParam: 'state',
    options: STATE_OPTIONS
  }
];