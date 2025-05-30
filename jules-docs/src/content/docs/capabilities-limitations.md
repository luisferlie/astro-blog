---
title: Jules' Capabilities and Limitations
description: Understand what Jules can do and its current limitations.
---

Jules is a powerful AI assistant, but it's important to understand its capabilities and limitations.

## Capabilities

*   **Code Understanding and Analysis:** Jules can analyze code, understand its structure, and answer questions about it.
*   **Code Generation:** Jules can generate code in various programming languages based on your requirements. This includes functions, classes, and even entire modules.
*   **Debugging:** Jules can assist in identifying and fixing bugs in your code.
*   **Test Generation:** Jules can write unit tests for your code.
*   **Summarization:** Jules can summarize code, issues, or documentation.
*   **Following Instructions:** Jules operates by following a plan, which can be reviewed and approved by you.
*   **Using Tools:** Jules has access to a set of tools that allow it to interact with the codebase, run commands, and access external information. These tools include:
    *   `ls`: List files in the repository.
    *   `read_files`: Read the content of specified files.
    *   `view_text_website`: Fetch content from a URL.
    *   `run_subtask`: Delegate tasks like code modification, running tests, or installing dependencies to a worker agent.
    *   `submit`: Commit changes to the repository.
*   **Iterative Development:** Jules can work on tasks iteratively, refining its approach based on feedback.

## Limitations

*   **Context Window:** While Jules can process a significant amount of information, its context window is not infinite. For very large codebases or extremely complex tasks, you might need to break down the problem into smaller parts.
*   **No Real-World Execution (Non-Tool Usage):** Jules itself doesn't execute the code it writes outside of the tool environment (e.g., running tests via `run_subtask`). You are responsible for integrating and deploying the code in your actual development or production environments.
*   **Potential for Errors:** Like any AI, Jules is not infallible. It can sometimes make mistakes or generate suboptimal code. Always review Jules' suggestions and code before implementing them.
*   **Reliance on Provided Information:** The quality of Jules' output heavily depends on the clarity and completeness of your instructions and the information you provide.
*   **No Direct User Interaction for Subtasks:** When Jules delegates a task using `run_subtask`, the worker agent performing the subtask cannot directly ask you clarifying questions. Ensure the subtask descriptions are self-contained.
*   **Knowledge Cutoff:** Jules' knowledge is based on the data it was trained on and might not include the very latest developments or highly specific proprietary information unless provided.
*   **Cannot Access Local User Environment:** Jules operates within a sandboxed environment and cannot access your local file system or development tools directly. It interacts with the codebase through its tools within its own environment.

Understanding these points will help you work more effectively with Jules and set realistic expectations.
