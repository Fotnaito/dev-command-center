import { Activity, GitBranch, Star, Users, Code2, Calendar } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <Code2 className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-lg font-semibold tracking-tight">Dev Command Center</h1>
                <p className="text-xs text-muted-foreground">Personal developer dashboard</p>
              </div>
            </div>
            <div className="text-sm text-muted-foreground">
              fotnaito
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Stats Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title="Public Repos"
            value="3"
            icon={<GitBranch className="h-4 w-4" />}
            description="Including this one"
          />
          <StatCard
            title="Stars"
            value="0"
            icon={<Star className="h-4 w-4" />}
            description="Total stars received"
          />
          <StatCard
            title="Followers"
            value="0"
            icon={<Users className="h-4 w-4" />}
            description="GitHub followers"
          />
          <StatCard
            title="Contributions"
            value="—"
            icon={<Calendar className="h-4 w-4" />}
            description="This year"
          />
        </div>

        {/* Main Content Area */}
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {/* Activity Feed */}
          <div className="lg:col-span-2">
            <div className="rounded-xl border border-border bg-card">
              <div className="flex items-center gap-2 border-b border-border px-5 py-4">
                <Activity className="h-4 w-4 text-muted-foreground" />
                <h2 className="font-medium">Recent Activity</h2>
              </div>
              <div className="p-5">
                <div className="space-y-4">
                  <ActivityItem
                    title="Created repository"
                    description="dev-command-center"
                    time="Just now"
                  />
                  <ActivityItem
                    title="Pushed to"
                    description="react-gh-pages"
                    time="Earlier"
                  />
                  <ActivityItem
                    title="Created repository"
                    description="fotnaito-bot"
                    time="Earlier"
                  />
                </div>
                <p className="mt-6 text-center text-sm text-muted-foreground">
                  Live GitHub activity will appear here once the API is connected.
                </p>
              </div>
            </div>
          </div>

          {/* Side Panel */}
          <div className="space-y-6">
            <div className="rounded-xl border border-border bg-card p-5">
              <h3 className="font-medium">Quick Links</h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <a
                    href="https://github.com/Fotnaito"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    GitHub Profile →
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/Fotnaito/dev-command-center"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    This Repository →
                  </a>
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-border bg-card p-5">
              <h3 className="font-medium">Status</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Foundation is ready. Next steps: live GitHub data + more widgets.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function StatCard({
  title,
  value,
  icon,
  description,
}: {
  title: string;
  value: string;
  icon: React.ReactNode;
  description: string;
}) {
  return (
    <div className="rounded-xl border border-border bg-card p-5">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-muted-foreground">{title}</span>
        <span className="text-muted-foreground">{icon}</span>
      </div>
      <div className="mt-2 text-3xl font-semibold tracking-tight">{value}</div>
      <p className="mt-1 text-xs text-muted-foreground">{description}</p>
    </div>
  );
}

function ActivityItem({
  title,
  description,
  time,
}: {
  title: string;
  description: string;
  time: string;
}) {
  return (
    <div className="flex items-start justify-between gap-4">
      <div>
        <p className="text-sm font-medium">
          {title} <span className="text-muted-foreground font-normal">{description}</span>
        </p>
      </div>
      <span className="shrink-0 text-xs text-muted-foreground">{time}</span>
    </div>
  );
      }
