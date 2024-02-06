export interface Machine {
    name: string;
    state: "Running" | "Alarm" | "Warning";
    icon: string;
    color: string;
    stateIcon: string;
  }