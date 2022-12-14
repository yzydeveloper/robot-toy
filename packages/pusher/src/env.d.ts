// Required when adding declarations inside a module (.ts, not .d.ts)
// If you have documentation about why this is required I would love to know
declare global {
    // Target the module containing the `ProcessEnv` interface
    namespace NodeJS {
        // Merge the existing `ProcessEnv` definition with ours
        export interface ProcessEnv {
            DINGTALK_ROBOT_APP_ID: string
            DINGTALK_ROBOT_APP_SECRET: string
            // DINGTALK_USERIDS: string[]
            WECOM_ID: string
            WECOM_APP_ID: string
            WECOM_APP_SECRET: string
            TIAN_APP_SECRET: string
            CITY: string
            TIME_OF_KNOWING: string
        }
    }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export { }
