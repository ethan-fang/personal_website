import React from "react"
import { CVDataType } from "../components/CV/cv_datatype"

const CVData: CVDataType = {
  email: "ethan.fang.c@gmail.com",
  employements: [
    {
      company: "Facebook",
      location: "Menlo Park, US",
      position: "Software Engineer",
      teams: [
        {
          start: new Date("2018-01-01"),
          end: null,
          description: (
            <div>
              Led the developing of infra self-service and debugging tools for
              infra storage/caching/indexing systems such as MySQL, ZippyDB,
              Memcache, Graph storage. Proposed the vision of a unified data
              console that that helps Facebook engineers manage online data
              services efficiently and effectively. Bootstrapped, scoped,
              managed the project and aligned the direction with multiple infra
              teams to enable developer efficiency, server performance and data
              safety/privacy. Main technologies included Hack (PHP),
              React/Hooks, Relay/GraphQL and Thrift API.{" "}
            </div>
          ),
        },
        {
          start: new Date("2016-01-01"),
          end: new Date("2018-01-01"),
          description: (
            <div>
              Led data cache demand and efficiency projects on the web stack.
              Built end to end system to detect performance regressions,
              including data logging, anomaly detection and management. Main
              technologies included Hack (PHP), Python, React, Presto, Hive, and
              TailerSwift.
            </div>
          ),
        },
      ],
    },
  ],
}

export default CVData;
