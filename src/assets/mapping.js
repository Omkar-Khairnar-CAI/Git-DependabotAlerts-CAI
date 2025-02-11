export const mapping = {
    "ecosystem": "alert.dependency.package.ecosystem",
    "state": "alert.state",
    "package_name": "alert.dependency.package.name",
    "manifest_path": "alert.dependency.manifest_path",
    "scope": "alert.dependency.scope",
    "severity": "alert.security_advisory.severity",
    "cvss_v3_score": "alert.security_advisory.cvss_severities.cvss_v3.score",
    "cvss_v4_score": "alert.security_advisory.cvss_severities.cvss_v4.score",
    "epss_percentage": "alert.security_advisory.epss[*].percentage",
    "cwe_name": "alert.security_advisory.cwes[*].name",
    "identifiers": "alert.security_advisory.identifiers[*].value",
    "references": "alert.security_advisory.references[*].url",
    "created_at": "alert.created_at",
    "updated_at": "alert.updated_at",
    "dismissed_at": "alert.dismissed_at",
    "dismissed_reason": "alert.dismissed_reason",
    "dismissed_comment": "alert.dismissed_comment",
    "repository_name": "alert.repository.name",
    "repository_owner": "alert.repository.owner.login"
  }
  