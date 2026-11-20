interface ActivityItemProps {
  title: string;
  description: string;
  time: string;
}

export function ActivityItem({ title, description, time }: ActivityItemProps) {
  return (
    <div className="flex items-start justify-between gap-4">
      <div>
        <p className="text-sm font-medium">
          {title}{" "}
          <span className="font-normal text-muted-foreground">{description}</span>
        </p>
      </div>
      <span className="shrink-0 text-xs text-muted-foreground">{time}</span>
    </div>
  );
}
