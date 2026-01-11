# Page snapshot

```yaml
- generic [ref=e2]:
  - region "Notifications alt+T"
  - generic [ref=e3]:
    - banner [ref=e4]:
      - link "Coursiv" [ref=e6] [cursor=pointer]:
        - /url: /
        - img "Coursiv" [ref=e7]
    - main [ref=e8]:
      - generic [ref=e9]:
        - generic [ref=e10]:
          - heading "Welcome back" [level=1] [ref=e11]
          - paragraph [ref=e12]: Sign in to continue your learning journey
        - generic [ref=e13]:
          - generic [ref=e14]: Invalid email or password
          - generic [ref=e15]:
            - generic [ref=e16]: Email
            - textbox "Enter your email" [ref=e17]: e2etest@example.com
          - generic [ref=e18]:
            - generic [ref=e19]: Password
            - generic [ref=e20]:
              - textbox "Enter your password" [ref=e21]: TestPassword123!
              - button [ref=e22] [cursor=pointer]:
                - img [ref=e23]
          - link "Forgot password?" [ref=e27] [cursor=pointer]:
            - /url: /forgot-password
          - button "Sign In" [ref=e28] [cursor=pointer]
        - paragraph [ref=e30]:
          - text: Don't have an account?
          - link "Start the quiz" [ref=e31] [cursor=pointer]:
            - /url: /quiz/1
```