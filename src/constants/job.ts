export const JOB_TYPE = {
	ENGINEER: "engineer",
	DESIGNER: "designer",
	MARKETER: "marketer",
	SALES: "sales",
	OTHER: "other",
} as const;

export const JOB_LABELS = {
	[JOB_TYPE.ENGINEER]: "エンジニア",
	[JOB_TYPE.DESIGNER]: "デザイナー",
	[JOB_TYPE.MARKETER]: "マーケター",
	[JOB_TYPE.SALES]: "営業",
	[JOB_TYPE.OTHER]: "その他",
} as const;

export const JOB_OPTIONS = Object.entries(JOB_LABELS).map(([value, label]) => ({
	value,
	label,
}));

export const JOB_VALUES = Object.values(JOB_TYPE);

export type JobValue = (typeof JOB_TYPE)[keyof typeof JOB_TYPE];
export type JobLabel = (typeof JOB_LABELS)[JobValue];
