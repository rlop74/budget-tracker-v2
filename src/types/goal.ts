export type Goal = {
  id: string | number;
  created_at: string | number | Date;
  name: string;
  current_amount: number;
  target_amount: number;
};

export type NewGoalForm = {
  name: string;
  target_amount: number;
};

export type EditableGoal = {
  id: string | number;
  name: string;
  target_amount: number;
  current_amount: number;
}
