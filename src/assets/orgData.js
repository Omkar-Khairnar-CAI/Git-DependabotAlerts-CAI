export const alerts = [
  {
    number: 2,
    state: "dismissed",
    dependency: {
      package: {
        ecosystem: "pip",
        name: "django",
      },
      manifest_path: "path/to/requirements.txt",
      scope: "runtime",
    },
    security_advisory: {
      ghsa_id: "GHSA-rf4j-j272-fj86",
      cve_id: "CVE-2018-6188",
      summary:
        "Django allows remote attackers to obtain potentially sensitive information by leveraging data exposure from the confirm_login_allowed() method, as demonstrated by discovering whether a user account is inactive",
      description:
        "django.contrib.auth.forms.AuthenticationForm in Django 2.0 before 2.0.2, and 1.11.8 and 1.11.9, allows remote attackers to obtain potentially sensitive information by leveraging data exposure from the confirm_login_allowed() method, as demonstrated by discovering whether a user account is inactive.",
      vulnerabilities: [
        {
          package: {
            ecosystem: "pip",
            name: "django",
          },
          severity: "high",
          vulnerable_version_range: ">= 2.0.0, < 2.0.2",
          first_patched_version: {
            identifier: "2.0.2",
          },
        },
        {
          package: {
            ecosystem: "pip",
            name: "django",
          },
          severity: "high",
          vulnerable_version_range: ">= 1.11.8, < 1.11.10",
          first_patched_version: {
            identifier: "1.11.10",
          },
        },
      ],
      severity: "high",
      cvss: {
        vector_string: "CVSS:3.0/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:N/A:N",
        score: 7.5,
      },
      cvss_severities: {
        cvss_v3: {
          vector_string: "CVSS:3.0/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:N/A:N",
          score: 7.5,
        },
        cvss_v4: {
          vector_string:
            "CVSS:4.0/AV:N/AC:L/AT:N/PR:N/UI:N/VC:H/VI:N/VA:N/SC:N/SI:N/SA:N",
          score: 8.7,
        },
      },
      epss: [
        {
          percentage: 0.00045,
          percentile: "0.16001e0",
        },
      ],
      cwes: [
        {
          cwe_id: "CWE-200",
          name: "Exposure of Sensitive Information to an Unauthorized Actor",
        },
      ],
      identifiers: [
        {
          type: "GHSA",
          value: "GHSA-rf4j-j272-fj86",
        },
        {
          type: "CVE",
          value: "CVE-2018-6188",
        },
      ],
      references: [
        {
          url: "https://nvd.nist.gov/vuln/detail/CVE-2018-6188",
        },
        {
          url: "https://github.com/advisories/GHSA-rf4j-j272-fj86",
        },
        {
          url: "https://usn.ubuntu.com/3559-1/",
        },
        {
          url: "https://www.djangoproject.com/weblog/2018/feb/01/security-releases/",
        },
        {
          url: "http://www.securitytracker.com/id/1040422",
        },
      ],
      published_at: "2018-10-03T21:13:54Z",
      updated_at: "2022-04-26T18:35:37Z",
      withdrawn_at: null,
    },
    security_vulnerability: {
      package: {
        ecosystem: "pip",
        name: "django",
      },
      severity: "high",
      vulnerable_version_range: ">= 2.0.0, < 2.0.2",
      first_patched_version: {
        identifier: "2.0.2",
      },
    },
    url: "https://api.github.com/repos/octo-org/FitWell/dependabot/alerts/2",
    html_url: "https://github.com/octo-org/FitWell/security/dependabot/2",
    created_at: "2022-06-15T07:43:03Z",
    updated_at: "2022-08-23T14:29:47Z",
    dismissed_at: "2022-08-23T14:29:47Z",
    dismissed_by: {
      login: "octocat",
      id: 1,
      node_id: "MDQ6VXNlcjE=",
      avatar_url: "https://github.com/images/error/octocat_happy.gif",
      gravatar_id: "",
      url: "https://api.github.com/users/octocat",
      html_url: "https://github.com/octocat",
      followers_url: "https://api.github.com/users/octocat/followers",
      following_url:
        "https://api.github.com/users/octocat/following{/other_user}",
      gists_url: "https://api.github.com/users/octocat/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/octocat/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/octocat/subscriptions",
      organizations_url: "https://api.github.com/users/octocat/orgs",
      repos_url: "https://api.github.com/users/octocat/repos",
      events_url: "https://api.github.com/users/octocat/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/octocat/received_events",
      type: "User",
      site_admin: false,
    },
    dismissed_reason: "tolerable_risk",
    dismissed_comment: "This alert is accurate but we use a sanitizer.",
    fixed_at: null,
    repository: {
      id: 217723378,
      node_id: "MDEwOlJlcG9zaXRvcnkyMTc3MjMzNzg=",
      name: "FitWell",
      full_name: "octo-org/FitWell",
      owner: {
        login: "octo-org",
        id: 6811672,
        node_id: "MDEyOk9yZ2FuaXphdGlvbjY4MTE2NzI=",
        avatar_url: "https://avatars3.githubusercontent.com/u/6811672?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/octo-org",
        html_url: "https://github.com/octo-org",
        followers_url: "https://api.github.com/users/octo-org/followers",
        following_url:
          "https://api.github.com/users/octo-org/following{/other_user}",
        gists_url: "https://api.github.com/users/octo-org/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/octo-org/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/octo-org/subscriptions",
        organizations_url: "https://api.github.com/users/octo-org/orgs",
        repos_url: "https://api.github.com/users/octo-org/repos",
        events_url: "https://api.github.com/users/octo-org/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/octo-org/received_events",
        type: "Organization",
        site_admin: false,
      },
      private: true,
      html_url: "https://github.com/octo-org/FitWell",
      description: null,
      fork: false,
      url: "https://api.github.com/repos/octo-org/FitWell",
      archive_url:
        "https://api.github.com/repos/octo-org/FitWell/{archive_format}{/ref}",
      assignees_url:
        "https://api.github.com/repos/octo-org/FitWell/assignees{/user}",
      blobs_url:
        "https://api.github.com/repos/octo-org/FitWell/git/blobs{/sha}",
      branches_url:
        "https://api.github.com/repos/octo-org/FitWell/branches{/branch}",
      collaborators_url:
        "https://api.github.com/repos/octo-org/FitWell/collaborators{/collaborator}",
      comments_url:
        "https://api.github.com/repos/octo-org/FitWell/comments{/number}",
      commits_url:
        "https://api.github.com/repos/octo-org/FitWell/commits{/sha}",
      compare_url:
        "https://api.github.com/repos/octo-org/FitWell/compare/{base}...{head}",
      contents_url:
        "https://api.github.com/repos/octo-org/FitWell/contents/{+path}",
      contributors_url:
        "https://api.github.com/repos/octo-org/FitWell/contributors",
      deployments_url:
        "https://api.github.com/repos/octo-org/FitWell/deployments",
      downloads_url:
        "https://api.github.com/repos/octo-org/FitWell/downloads",
      events_url: "https://api.github.com/repos/octo-org/FitWell/events",
      forks_url: "https://api.github.com/repos/octo-org/FitWell/forks",
      git_commits_url:
        "https://api.github.com/repos/octo-org/FitWell/git/commits{/sha}",
      git_refs_url:
        "https://api.github.com/repos/octo-org/FitWell/git/refs{/sha}",
      git_tags_url:
        "https://api.github.com/repos/octo-org/FitWell/git/tags{/sha}",
      hooks_url: "https://api.github.com/repos/octo-org/FitWell/hooks",
      issue_comment_url:
        "https://api.github.com/repos/octo-org/FitWell/issues/comments{/number}",
      issue_events_url:
        "https://api.github.com/repos/octo-org/FitWell/issues/events{/number}",
      issues_url:
        "https://api.github.com/repos/octo-org/FitWell/issues{/number}",
      keys_url:
        "https://api.github.com/repos/octo-org/FitWell/keys{/key_id}",
      labels_url:
        "https://api.github.com/repos/octo-org/FitWell/labels{/name}",
      languages_url:
        "https://api.github.com/repos/octo-org/FitWell/languages",
      merges_url: "https://api.github.com/repos/octo-org/FitWell/merges",
      milestones_url:
        "https://api.github.com/repos/octo-org/FitWell/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/octo-org/FitWell/notifications{?since,all,participating}",
      pulls_url:
        "https://api.github.com/repos/octo-org/FitWell/pulls{/number}",
      releases_url:
        "https://api.github.com/repos/octo-org/FitWell/releases{/id}",
      stargazers_url:
        "https://api.github.com/repos/octo-org/FitWell/stargazers",
      statuses_url:
        "https://api.github.com/repos/octo-org/FitWell/statuses/{sha}",
      subscribers_url:
        "https://api.github.com/repos/octo-org/FitWell/subscribers",
      subscription_url:
        "https://api.github.com/repos/octo-org/FitWell/subscription",
      tags_url: "https://api.github.com/repos/octo-org/FitWell/tags",
      teams_url: "https://api.github.com/repos/octo-org/FitWell/teams",
      trees_url:
        "https://api.github.com/repos/octo-org/FitWell/git/trees{/sha}",
    },
  },
  {
      number: 2,
      state: "dismissed",
      dependency: {
        package: {
          ecosystem: "pip",
          name: "django",
        },
        manifest_path: "path/to/requirements.txt",
        scope: "runtime",
      },
      security_advisory: {
        ghsa_id: "GHSA-rf4j-j272-fj86",
        cve_id: "CVE-2018-6188",
        summary:
          "Django allows remote attackers to obtain potentially sensitive information by leveraging data exposure from the confirm_login_allowed() method, as demonstrated by discovering whether a user account is inactive",
        description:
          "django.contrib.auth.forms.AuthenticationForm in Django 2.0 before 2.0.2, and 1.11.8 and 1.11.9, allows remote attackers to obtain potentially sensitive information by leveraging data exposure from the confirm_login_allowed() method, as demonstrated by discovering whether a user account is inactive.",
        vulnerabilities: [
          {
            package: {
              ecosystem: "pip",
              name: "django",
            },
            severity: "high",
            vulnerable_version_range: ">= 2.0.0, < 2.0.2",
            first_patched_version: {
              identifier: "2.0.2",
            },
          },
          {
            package: {
              ecosystem: "pip",
              name: "django",
            },
            severity: "high",
            vulnerable_version_range: ">= 1.11.8, < 1.11.10",
            first_patched_version: {
              identifier: "1.11.10",
            },
          },
        ],
        severity: "high",
        cvss: {
          vector_string: "CVSS:3.0/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:N/A:N",
          score: 7.5,
        },
        cvss_severities: {
          cvss_v3: {
            vector_string: "CVSS:3.0/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:N/A:N",
            score: 7.5,
          },
          cvss_v4: {
            vector_string:
              "CVSS:4.0/AV:N/AC:L/AT:N/PR:N/UI:N/VC:H/VI:N/VA:N/SC:N/SI:N/SA:N",
            score: 8.7,
          },
        },
        epss: [
          {
            percentage: 0.00045,
            percentile: "0.16001e0",
          },
        ],
        cwes: [
          {
            cwe_id: "CWE-200",
            name: "Exposure of Sensitive Information to an Unauthorized Actor",
          },
        ],
        identifiers: [
          {
            type: "GHSA",
            value: "GHSA-rf4j-j272-fj86",
          },
          {
            type: "CVE",
            value: "CVE-2018-6188",
          },
        ],
        references: [
          {
            url: "https://nvd.nist.gov/vuln/detail/CVE-2018-6188",
          },
          {
            url: "https://github.com/advisories/GHSA-rf4j-j272-fj86",
          },
          {
            url: "https://usn.ubuntu.com/3559-1/",
          },
          {
            url: "https://www.djangoproject.com/weblog/2018/feb/01/security-releases/",
          },
          {
            url: "http://www.securitytracker.com/id/1040422",
          },
        ],
        published_at: "2018-10-03T21:13:54Z",
        updated_at: "2022-04-26T18:35:37Z",
        withdrawn_at: null,
      },
      security_vulnerability: {
        package: {
          ecosystem: "pip",
          name: "django",
        },
        severity: "high",
        vulnerable_version_range: ">= 2.0.0, < 2.0.2",
        first_patched_version: {
          identifier: "2.0.2",
        },
      },
      url: "https://api.github.com/repos/octo-org/FitWell/dependabot/alerts/2",
      html_url: "https://github.com/octo-org/FitWell/security/dependabot/2",
      created_at: "2022-06-15T07:43:03Z",
      updated_at: "2022-08-23T14:29:47Z",
      dismissed_at: "2022-08-23T14:29:47Z",
      dismissed_by: {
        login: "octocat",
        id: 1,
        node_id: "MDQ6VXNlcjE=",
        avatar_url: "https://github.com/images/error/octocat_happy.gif",
        gravatar_id: "",
        url: "https://api.github.com/users/octocat",
        html_url: "https://github.com/octocat",
        followers_url: "https://api.github.com/users/octocat/followers",
        following_url:
          "https://api.github.com/users/octocat/following{/other_user}",
        gists_url: "https://api.github.com/users/octocat/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/octocat/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/octocat/subscriptions",
        organizations_url: "https://api.github.com/users/octocat/orgs",
        repos_url: "https://api.github.com/users/octocat/repos",
        events_url: "https://api.github.com/users/octocat/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/octocat/received_events",
        type: "User",
        site_admin: false,
      },
      dismissed_reason: "tolerable_risk",
      dismissed_comment: "This alert is accurate but we use a sanitizer.",
      fixed_at: null,
      repository: {
        id: 217723378,
        node_id: "MDEwOlJlcG9zaXRvcnkyMTc3MjMzNzg=",
        name: "FitWell",
        full_name: "octo-org/FitWell",
        owner: {
          login: "octo-org",
          id: 6811672,
          node_id: "MDEyOk9yZ2FuaXphdGlvbjY4MTE2NzI=",
          avatar_url: "https://avatars3.githubusercontent.com/u/6811672?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/octo-org",
          html_url: "https://github.com/octo-org",
          followers_url: "https://api.github.com/users/octo-org/followers",
          following_url:
            "https://api.github.com/users/octo-org/following{/other_user}",
          gists_url: "https://api.github.com/users/octo-org/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/octo-org/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/octo-org/subscriptions",
          organizations_url: "https://api.github.com/users/octo-org/orgs",
          repos_url: "https://api.github.com/users/octo-org/repos",
          events_url: "https://api.github.com/users/octo-org/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/octo-org/received_events",
          type: "Organization",
          site_admin: false,
        },
        private: true,
        html_url: "https://github.com/octo-org/FitWell",
        description: null,
        fork: false,
        url: "https://api.github.com/repos/octo-org/FitWell",
        archive_url:
          "https://api.github.com/repos/octo-org/FitWell/{archive_format}{/ref}",
        assignees_url:
          "https://api.github.com/repos/octo-org/FitWell/assignees{/user}",
        blobs_url:
          "https://api.github.com/repos/octo-org/FitWell/git/blobs{/sha}",
        branches_url:
          "https://api.github.com/repos/octo-org/FitWell/branches{/branch}",
        collaborators_url:
          "https://api.github.com/repos/octo-org/FitWell/collaborators{/collaborator}",
        comments_url:
          "https://api.github.com/repos/octo-org/FitWell/comments{/number}",
        commits_url:
          "https://api.github.com/repos/octo-org/FitWell/commits{/sha}",
        compare_url:
          "https://api.github.com/repos/octo-org/FitWell/compare/{base}...{head}",
        contents_url:
          "https://api.github.com/repos/octo-org/FitWell/contents/{+path}",
        contributors_url:
          "https://api.github.com/repos/octo-org/FitWell/contributors",
        deployments_url:
          "https://api.github.com/repos/octo-org/FitWell/deployments",
        downloads_url:
          "https://api.github.com/repos/octo-org/FitWell/downloads",
        events_url: "https://api.github.com/repos/octo-org/FitWell/events",
        forks_url: "https://api.github.com/repos/octo-org/FitWell/forks",
        git_commits_url:
          "https://api.github.com/repos/octo-org/FitWell/git/commits{/sha}",
        git_refs_url:
          "https://api.github.com/repos/octo-org/FitWell/git/refs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/octo-org/FitWell/git/tags{/sha}",
        hooks_url: "https://api.github.com/repos/octo-org/FitWell/hooks",
        issue_comment_url:
          "https://api.github.com/repos/octo-org/FitWell/issues/comments{/number}",
        issue_events_url:
          "https://api.github.com/repos/octo-org/FitWell/issues/events{/number}",
        issues_url:
          "https://api.github.com/repos/octo-org/FitWell/issues{/number}",
        keys_url:
          "https://api.github.com/repos/octo-org/FitWell/keys{/key_id}",
        labels_url:
          "https://api.github.com/repos/octo-org/FitWell/labels{/name}",
        languages_url:
          "https://api.github.com/repos/octo-org/FitWell/languages",
        merges_url: "https://api.github.com/repos/octo-org/FitWell/merges",
        milestones_url:
          "https://api.github.com/repos/octo-org/FitWell/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/octo-org/FitWell/notifications{?since,all,participating}",
        pulls_url:
          "https://api.github.com/repos/octo-org/FitWell/pulls{/number}",
        releases_url:
          "https://api.github.com/repos/octo-org/FitWell/releases{/id}",
        stargazers_url:
          "https://api.github.com/repos/octo-org/FitWell/stargazers",
        statuses_url:
          "https://api.github.com/repos/octo-org/FitWell/statuses/{sha}",
        subscribers_url:
          "https://api.github.com/repos/octo-org/FitWell/subscribers",
        subscription_url:
          "https://api.github.com/repos/octo-org/FitWell/subscription",
        tags_url: "https://api.github.com/repos/octo-org/FitWell/tags",
        teams_url: "https://api.github.com/repos/octo-org/FitWell/teams",
        trees_url:
          "https://api.github.com/repos/octo-org/FitWell/git/trees{/sha}",
      },
    },
    {
      number: 2,
      state: "dismissed",
      dependency: {
        package: {
          ecosystem: "pip",
          name: "django",
        },
        manifest_path: "path/to/requirements.txt",
        scope: "runtime",
      },
      security_advisory: {
        ghsa_id: "GHSA-rf4j-j272-fj86",
        cve_id: "CVE-2018-6188",
        summary:
          "Django allows remote attackers to obtain potentially sensitive information by leveraging data exposure from the confirm_login_allowed() method, as demonstrated by discovering whether a user account is inactive",
        description:
          "django.contrib.auth.forms.AuthenticationForm in Django 2.0 before 2.0.2, and 1.11.8 and 1.11.9, allows remote attackers to obtain potentially sensitive information by leveraging data exposure from the confirm_login_allowed() method, as demonstrated by discovering whether a user account is inactive.",
        vulnerabilities: [
          {
            package: {
              ecosystem: "pip",
              name: "django",
            },
            severity: "high",
            vulnerable_version_range: ">= 2.0.0, < 2.0.2",
            first_patched_version: {
              identifier: "2.0.2",
            },
          },
          {
            package: {
              ecosystem: "pip",
              name: "django",
            },
            severity: "high",
            vulnerable_version_range: ">= 1.11.8, < 1.11.10",
            first_patched_version: {
              identifier: "1.11.10",
            },
          },
        ],
        severity: "high",
        cvss: {
          vector_string: "CVSS:3.0/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:N/A:N",
          score: 7.5,
        },
        cvss_severities: {
          cvss_v3: {
            vector_string: "CVSS:3.0/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:N/A:N",
            score: 7.5,
          },
          cvss_v4: {
            vector_string:
              "CVSS:4.0/AV:N/AC:L/AT:N/PR:N/UI:N/VC:H/VI:N/VA:N/SC:N/SI:N/SA:N",
            score: 8.7,
          },
        },
        epss: [
          {
            percentage: 0.00045,
            percentile: "0.16001e0",
          },
        ],
        cwes: [
          {
            cwe_id: "CWE-200",
            name: "Exposure of Sensitive Information to an Unauthorized Actor",
          },
        ],
        identifiers: [
          {
            type: "GHSA",
            value: "GHSA-rf4j-j272-fj86",
          },
          {
            type: "CVE",
            value: "CVE-2018-6188",
          },
        ],
        references: [
          {
            url: "https://nvd.nist.gov/vuln/detail/CVE-2018-6188",
          },
          {
            url: "https://github.com/advisories/GHSA-rf4j-j272-fj86",
          },
          {
            url: "https://usn.ubuntu.com/3559-1/",
          },
          {
            url: "https://www.djangoproject.com/weblog/2018/feb/01/security-releases/",
          },
          {
            url: "http://www.securitytracker.com/id/1040422",
          },
        ],
        published_at: "2018-10-03T21:13:54Z",
        updated_at: "2022-04-26T18:35:37Z",
        withdrawn_at: null,
      },
      security_vulnerability: {
        package: {
          ecosystem: "pip",
          name: "django",
        },
        severity: "high",
        vulnerable_version_range: ">= 2.0.0, < 2.0.2",
        first_patched_version: {
          identifier: "2.0.2",
        },
      },
      url: "https://api.github.com/repos/octo-org/FitWell/dependabot/alerts/2",
      html_url: "https://github.com/octo-org/FitWell/security/dependabot/2",
      created_at: "2022-07-15T07:43:03Z",
      updated_at: "2022-08-23T14:29:47Z",
      dismissed_at: "2022-08-23T14:29:47Z",
      dismissed_by: {
        login: "octocat",
        id: 1,
        node_id: "MDQ6VXNlcjE=",
        avatar_url: "https://github.com/images/error/octocat_happy.gif",
        gravatar_id: "",
        url: "https://api.github.com/users/octocat",
        html_url: "https://github.com/octocat",
        followers_url: "https://api.github.com/users/octocat/followers",
        following_url:
          "https://api.github.com/users/octocat/following{/other_user}",
        gists_url: "https://api.github.com/users/octocat/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/octocat/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/octocat/subscriptions",
        organizations_url: "https://api.github.com/users/octocat/orgs",
        repos_url: "https://api.github.com/users/octocat/repos",
        events_url: "https://api.github.com/users/octocat/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/octocat/received_events",
        type: "User",
        site_admin: false,
      },
      dismissed_reason: "tolerable_risk",
      dismissed_comment: "This alert is accurate but we use a sanitizer.",
      fixed_at: null,
      repository: {
        id: 217723378,
        node_id: "MDEwOlJlcG9zaXRvcnkyMTc3MjMzNzg=",
        name: "FitWell",
        full_name: "octo-org/FitWell",
        owner: {
          login: "octo-org",
          id: 6811672,
          node_id: "MDEyOk9yZ2FuaXphdGlvbjY4MTE2NzI=",
          avatar_url: "https://avatars3.githubusercontent.com/u/6811672?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/octo-org",
          html_url: "https://github.com/octo-org",
          followers_url: "https://api.github.com/users/octo-org/followers",
          following_url:
            "https://api.github.com/users/octo-org/following{/other_user}",
          gists_url: "https://api.github.com/users/octo-org/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/octo-org/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/octo-org/subscriptions",
          organizations_url: "https://api.github.com/users/octo-org/orgs",
          repos_url: "https://api.github.com/users/octo-org/repos",
          events_url: "https://api.github.com/users/octo-org/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/octo-org/received_events",
          type: "Organization",
          site_admin: false,
        },
        private: true,
        html_url: "https://github.com/octo-org/FitWell",
        description: null,
        fork: false,
        url: "https://api.github.com/repos/octo-org/FitWell",
        archive_url:
          "https://api.github.com/repos/octo-org/FitWell/{archive_format}{/ref}",
        assignees_url:
          "https://api.github.com/repos/octo-org/FitWell/assignees{/user}",
        blobs_url:
          "https://api.github.com/repos/octo-org/FitWell/git/blobs{/sha}",
        branches_url:
          "https://api.github.com/repos/octo-org/FitWell/branches{/branch}",
        collaborators_url:
          "https://api.github.com/repos/octo-org/FitWell/collaborators{/collaborator}",
        comments_url:
          "https://api.github.com/repos/octo-org/FitWell/comments{/number}",
        commits_url:
          "https://api.github.com/repos/octo-org/FitWell/commits{/sha}",
        compare_url:
          "https://api.github.com/repos/octo-org/FitWell/compare/{base}...{head}",
        contents_url:
          "https://api.github.com/repos/octo-org/FitWell/contents/{+path}",
        contributors_url:
          "https://api.github.com/repos/octo-org/FitWell/contributors",
        deployments_url:
          "https://api.github.com/repos/octo-org/FitWell/deployments",
        downloads_url:
          "https://api.github.com/repos/octo-org/FitWell/downloads",
        events_url: "https://api.github.com/repos/octo-org/FitWell/events",
        forks_url: "https://api.github.com/repos/octo-org/FitWell/forks",
        git_commits_url:
          "https://api.github.com/repos/octo-org/FitWell/git/commits{/sha}",
        git_refs_url:
          "https://api.github.com/repos/octo-org/FitWell/git/refs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/octo-org/FitWell/git/tags{/sha}",
        hooks_url: "https://api.github.com/repos/octo-org/FitWell/hooks",
        issue_comment_url:
          "https://api.github.com/repos/octo-org/FitWell/issues/comments{/number}",
        issue_events_url:
          "https://api.github.com/repos/octo-org/FitWell/issues/events{/number}",
        issues_url:
          "https://api.github.com/repos/octo-org/FitWell/issues{/number}",
        keys_url:
          "https://api.github.com/repos/octo-org/FitWell/keys{/key_id}",
        labels_url:
          "https://api.github.com/repos/octo-org/FitWell/labels{/name}",
        languages_url:
          "https://api.github.com/repos/octo-org/FitWell/languages",
        merges_url: "https://api.github.com/repos/octo-org/FitWell/merges",
        milestones_url:
          "https://api.github.com/repos/octo-org/FitWell/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/octo-org/FitWell/notifications{?since,all,participating}",
        pulls_url:
          "https://api.github.com/repos/octo-org/FitWell/pulls{/number}",
        releases_url:
          "https://api.github.com/repos/octo-org/FitWell/releases{/id}",
        stargazers_url:
          "https://api.github.com/repos/octo-org/FitWell/stargazers",
        statuses_url:
          "https://api.github.com/repos/octo-org/FitWell/statuses/{sha}",
        subscribers_url:
          "https://api.github.com/repos/octo-org/FitWell/subscribers",
        subscription_url:
          "https://api.github.com/repos/octo-org/FitWell/subscription",
        tags_url: "https://api.github.com/repos/octo-org/FitWell/tags",
        teams_url: "https://api.github.com/repos/octo-org/FitWell/teams",
        trees_url:
          "https://api.github.com/repos/octo-org/FitWell/git/trees{/sha}",
      },
    },
  {
    number: 1,
    state: "open",
    dependency: {
      package: {
        ecosystem: "pip",
        name: "ansible",
      },
      manifest_path: "path/to/requirements.txt",
      scope: "runtime",
    },
    security_advisory: {
      ghsa_id: "GHSA-8f4m-hccc-8qph",
      cve_id: "CVE-2021-20191",
      summary: "Insertion of Sensitive Information into Log File in ansible",
      description:
        "A flaw was found in ansible. Credentials, such as secrets, are being disclosed in console log by default and not protected by no_log feature when using those modules. An attacker can take advantage of this information to steal those credentials. The highest threat from this vulnerability is to data confidentiality.",
      vulnerabilities: [
        {
          package: {
            ecosystem: "pip",
            name: "ansible",
          },
          severity: "medium",
          vulnerable_version_range: ">= 2.9.0, < 2.9.18",
          first_patched_version: {
            identifier: "2.9.18",
          },
        },
        {
          package: {
            ecosystem: "pip",
            name: "ansible",
          },
          severity: "medium",
          vulnerable_version_range: "< 2.8.19",
          first_patched_version: {
            identifier: "2.8.19",
          },
        },
        {
          package: {
            ecosystem: "pip",
            name: "ansible",
          },
          severity: "medium",
          vulnerable_version_range: ">= 2.10.0, < 2.10.7",
          first_patched_version: {
            identifier: "2.10.7",
          },
        },
      ],
      severity: "medium",
      cvss: {
        vector_string: "CVSS:3.1/AV:L/AC:L/PR:L/UI:N/S:U/C:H/I:N/A:N",
        score: 5.5,
      },
      cvss_severities: {
        cvss_v3: {
          vector_string: "CVSS:3.1/AV:L/AC:L/PR:L/UI:N/S:U/C:H/I:N/A:N",
          score: 5.5,
        },
        cvss_v4: {
          vector_string:
            "CVSS:4.0/AV:L/AC:L/AT:N/PR:N/UI:P/VC:H/VI:H/VA:H/SC:N/SI:N/SA:N",
          score: 8.5,
        },
      },
      cwes: [
        {
          cwe_id: "CWE-532",
          name: "Insertion of Sensitive Information into Log File",
        },
      ],
      identifiers: [
        {
          type: "GHSA",
          value: "GHSA-8f4m-hccc-8qph",
        },
        {
          type: "CVE",
          value: "CVE-2021-20191",
        },
      ],
      references: [
        {
          url: "https://nvd.nist.gov/vuln/detail/CVE-2021-20191",
        },
        {
          url: "https://access.redhat.com/security/cve/cve-2021-20191",
        },
        {
          url: "https://bugzilla.redhat.com/show_bug.cgi?id=1916813",
        },
      ],
      published_at: "2021-06-01T17:38:00Z",
      updated_at: "2021-08-12T23:06:00Z",
      withdrawn_at: null,
    },
    security_vulnerability: {
      package: {
        ecosystem: "pip",
        name: "ansible",
      },
      severity: "medium",
      vulnerable_version_range: "< 2.8.19",
      first_patched_version: {
        identifier: "2.8.19",
      },
    },
    url: "https://api.github.com/repos/octo-org/FitWellReactJS/dependabot/alerts/1",
    html_url: "https://github.com/octo-org/FitWellReactJS/security/dependabot/1",
    created_at: "2022-08-14T15:21:52Z",
    updated_at: "2022-06-14T15:21:52Z",
    dismissed_at: null,
    dismissed_by: null,
    dismissed_reason: null,
    dismissed_comment: null,
    fixed_at: null,
    repository: {
      id: 664700648,
      node_id: "MDEwOlJlcG9zaXRvcnk2NjQ3MDA2NDg=",
      name: "FitWellReactJS",
      full_name: "octo-org/FitWellReactJS",
      owner: {
        login: "octo-org",
        id: 6811672,
        node_id: "MDEyOk9yZ2FuaXphdGlvbjY4MTE2NzI=",
        avatar_url: "https://avatars3.githubusercontent.com/u/6811672?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/octo-org",
        html_url: "https://github.com/octo-org",
        followers_url: "https://api.github.com/users/octo-org/followers",
        following_url:
          "https://api.github.com/users/octo-org/following{/other_user}",
        gists_url: "https://api.github.com/users/octo-org/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/octo-org/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/octo-org/subscriptions",
        organizations_url: "https://api.github.com/users/octo-org/orgs",
        repos_url: "https://api.github.com/users/octo-org/repos",
        events_url: "https://api.github.com/users/octo-org/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/octo-org/received_events",
        type: "Organization",
        site_admin: false,
      },
      private: true,
      html_url: "https://github.com/octo-org/FitWellReactJS",
      description: null,
      fork: false,
      url: "https://api.github.com/repos/octo-org/FitWellReactJS",
      archive_url:
        "https://api.github.com/repos/octo-org/FitWellReactJS/{archive_format}{/ref}",
      assignees_url:
        "https://api.github.com/repos/octo-org/FitWellReactJS/assignees{/user}",
      blobs_url:
        "https://api.github.com/repos/octo-org/FitWellReactJS/git/blobs{/sha}",
      branches_url:
        "https://api.github.com/repos/octo-org/FitWellReactJS/branches{/branch}",
      collaborators_url:
        "https://api.github.com/repos/octo-org/FitWellReactJS/collaborators{/collaborator}",
      comments_url:
        "https://api.github.com/repos/octo-org/FitWellReactJS/comments{/number}",
      commits_url:
        "https://api.github.com/repos/octo-org/FitWellReactJS/commits{/sha}",
      compare_url:
        "https://api.github.com/repos/octo-org/FitWellReactJS/compare/{base}...{head}",
      contents_url:
        "https://api.github.com/repos/octo-org/FitWellReactJS/contents/{+path}",
      contributors_url:
        "https://api.github.com/repos/octo-org/FitWellReactJS/contributors",
      deployments_url:
        "https://api.github.com/repos/octo-org/FitWellReactJS/deployments",
      downloads_url:
        "https://api.github.com/repos/octo-org/FitWellReactJS/downloads",
      events_url: "https://api.github.com/repos/octo-org/FitWellReactJS/events",
      forks_url: "https://api.github.com/repos/octo-org/FitWellReactJS/forks",
      git_commits_url:
        "https://api.github.com/repos/octo-org/FitWellReactJS/git/commits{/sha}",
      git_refs_url:
        "https://api.github.com/repos/octo-org/FitWellReactJS/git/refs{/sha}",
      git_tags_url:
        "https://api.github.com/repos/octo-org/FitWellReactJS/git/tags{/sha}",
      hooks_url: "https://api.github.com/repos/octo-org/FitWellReactJS/hooks",
      issue_comment_url:
        "https://api.github.com/repos/octo-org/FitWellReactJS/issues/comments{/number}",
      issue_events_url:
        "https://api.github.com/repos/octo-org/FitWellReactJS/issues/events{/number}",
      issues_url:
        "https://api.github.com/repos/octo-org/FitWellReactJS/issues{/number}",
      keys_url:
        "https://api.github.com/repos/octo-org/FitWellReactJS/keys{/key_id}",
      labels_url:
        "https://api.github.com/repos/octo-org/FitWellReactJS/labels{/name}",
      languages_url:
        "https://api.github.com/repos/octo-org/FitWellReactJS/languages",
      merges_url: "https://api.github.com/repos/octo-org/FitWellReactJS/merges",
      milestones_url:
        "https://api.github.com/repos/octo-org/FitWellReactJS/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/octo-org/FitWellReactJS/notifications{?since,all,participating}",
      pulls_url:
        "https://api.github.com/repos/octo-org/FitWellReactJS/pulls{/number}",
      releases_url:
        "https://api.github.com/repos/octo-org/FitWellReactJS/releases{/id}",
      stargazers_url:
        "https://api.github.com/repos/octo-org/FitWellReactJS/stargazers",
      statuses_url:
        "https://api.github.com/repos/octo-org/FitWellReactJS/statuses/{sha}",
      subscribers_url:
        "https://api.github.com/repos/octo-org/FitWellReactJS/subscribers",
      subscription_url:
        "https://api.github.com/repos/octo-org/FitWellReactJS/subscription",
      tags_url: "https://api.github.com/repos/octo-org/FitWellReactJS/tags",
      teams_url: "https://api.github.com/repos/octo-org/FitWellReactJS/teams",
      trees_url:
        "https://api.github.com/repos/octo-org/FitWellReactJS/git/trees{/sha}",
    },
  },
  {
    number: 3,
    state: "open",
    dependency: {
      package: {
        ecosystem: "npm",
        name: "lodash",
      },
      manifest_path: "path/to/package.json",
      scope: "runtime",
    },
    security_advisory: {
      ghsa_id: "GHSA-xxxx-yyyy-zzzz",
      summary: "Lodash prototype pollution vulnerability",
      description:
        "A prototype pollution vulnerability exists in lodash < 4.17.20, allowing attackers to modify JavaScript object prototypes.",
      severity: "critical",
      cvss: {
        vector_string: "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H",
        score: 6.8,
      },
      cvss_severities: {
        cvss_v3: {
          vector_string: "CVSS:3.1/AV:L/AC:L/PR:L/UI:N/S:U/C:H/I:N/A:N",
          score: 2.5,
        },
        cvss_v4: {
          vector_string:
            "CVSS:4.0/AV:L/AC:L/AT:N/PR:N/UI:P/VC:H/VI:H/VA:H/SC:N/SI:N/SA:N",
          score: 7.5,
        },
      },
      published_at: "2023-01-15T12:00:00Z",
      updated_at: "2023-02-10T15:30:00Z",
      withdrawn_at: null,
    },
    security_vulnerability: {
      package: {
        ecosystem: "npm",
        name: "lodash",
      },
      severity: "critical",
      vulnerable_version_range: "< 4.17.20",
      first_patched_version: {
        identifier: "4.17.20",
      },
    },
    url: "https://api.github.com/repos/example-org/example-repo/dependabot/alerts/3",
    html_url:
      "https://github.com/example-org/example-repo/security/dependabot/3",
    created_at: "2023-01-20T08:45:00Z",
    updated_at: "2023-02-12T10:00:00Z",
    dismissed_at: null,
    fixed_at: null,
    repository: {
      id: 123456789,
      name: "example-repo",
      full_name: "example-org/example-repo",
      private: false,
      html_url: "https://github.com/example-org/example-repo",
    },
  },
  {
    number: 4,
    state: "dismissed",
    dependency: {
      package: {
        ecosystem: "pip",
        name: "requests",
      },
      manifest_path: "path/to/requirements.txt",
      scope: "development",
    },
    security_advisory: {
      ghsa_id: "GHSA-abcd-1234-efgh",
      summary: "Requests SSL certificate verification issue",
      description:
        "Certain versions of requests do not correctly verify SSL certificates, allowing man-in-the-middle attacks.",
      severity: "high",
      cvss: {
        vector_string: "CVSS:3.0/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:M/A:N",
        score: 7.2,
      },
      cvss_severities: {
        cvss_v3: {
          vector_string: "CVSS:3.1/AV:L/AC:L/PR:L/UI:N/S:U/C:H/I:N/A:N",
          score: 11.5,
        },
        cvss_v4: {
          vector_string:
            "CVSS:4.0/AV:L/AC:L/AT:N/PR:N/UI:P/VC:H/VI:H/VA:H/SC:N/SI:N/SA:N",
          score: 10.5,
        },
      },
      published_at: "2023-03-05T14:00:00Z",
      updated_at: "2023-03-15T16:20:00Z",
      withdrawn_at: null,
    },
    security_vulnerability: {
      package: {
        ecosystem: "pip",
        name: "requests",
      },
      severity: "high",
      vulnerable_version_range: "< 2.25.1",
      first_patched_version: {
        identifier: "2.25.1",
      },
    },
    url: "https://api.github.com/repos/example-org/example-repo/dependabot/alerts/4",
    html_url:
      "https://github.com/example-org/example-repo/security/dependabot/4",
    created_at: "2023-03-10T09:30:00Z",
    updated_at: "2023-03-18T11:15:00Z",
    dismissed_at: "2023-03-18T11:15:00Z",
    dismissed_by: {
      login: "admin-user",
      id: 2,
      avatar_url: "https://github.com/images/error/user.png",
    },
    dismissed_reason: "not applicable",
    fixed_at: null,
    repository: {
      id: 987654321,
      name: "example-repo",
      full_name: "example-org/example-repo",
      private: false,
      html_url: "https://github.com/example-org/example-repo",
    },
  },
];