import { Dataset } from "./types2"

export const datasets: Dataset[] = [
	{
		entitlements: [
			"CONNECTION_READ",
			"CONNECTION_UPDATE",
			"DATASET_FETCH_SAMPLE",
			"DATASET_DELETE",
			"DATASET_READ",
			"CONNECTION_SHARE",
			"DATASET_UPDATE",
			"DATASET_SHARE",
			"CONNECTION_DELETE",
			"DATASET_CERTIFY"
		],
		id: "53bcb9d3-7a8b-4adb-8e29-b6e1421e8b4d",
		created: 1547127646314,
		updated: 1547127680233,
		enabled: true,
		label: "S3 lolo",
		type: "ZmlsZWlvI0ZpbGVJTyNkYXRhc2V0I1MzRGF0YVNldA",
		version: 0,
		datastoreId: "ee1ef64d-9b16-46ea-8950-262df82310ae",
		datastore: {
			id: "ee1ef64d-9b16-46ea-8950-262df82310ae",
			label: "S3 lolo",
			type: "ZmlsZWlvI0ZpbGVJTyNkYXRhc3RvcmUjUzNEYXRhU3RvcmU",
			typeLabel: "S3 Connection",
			icon: "file-hdfs-o",
			familyId: "ZmlsZWlvI0ZpbGVJTw",
			cloudAgentId: "ad20a5b9-3e43-4e3d-acde-d52416f8a660"
		},
		owner: "5f3e02d4-441a-49d4-be02-d4441a79d476",
		creator: "Jane Doe",
		rating: {},
		certification: "none",
		sharing: { isOwner: true, isSharedWithOthers: false },
		favorite: false,
		talendGlobalQuality: { "0": 0, "1": 0, "-1": 0, total: 0 }
	},
	{
		entitlements: [
			"CONNECTION_READ",
			"CONNECTION_UPDATE",
			"DATASET_FETCH_SAMPLE",
			"DATASET_DELETE",
			"DATASET_READ",
			"CONNECTION_SHARE",
			"DATASET_UPDATE",
			"DATASET_SHARE",
			"CONNECTION_DELETE",
			"DATASET_CERTIFY"
		],
		id: "f568cec1-dfba-47ff-a125-fac807361eaa",
		created: 1546952974966,
		updated: 1547127193562,
		enabled: true,
		label: "My dataset",
		type: "ZmlsZWlvI0ZpbGVJTyNkYXRhc2V0I1MzRGF0YVNldA",
		description: "Desc",
		version: 0,
		datastoreId: "146beff5-5993-449e-963a-b6a93e39eaef",
		datastore: {
			id: "146beff5-5993-449e-963a-b6a93e39eaef",
			label: "My S3 test",
			type: "ZmlsZWlvI0ZpbGVJTyNkYXRhc3RvcmUjUzNEYXRhU3RvcmU",
			typeLabel: "S3 Connection",
			icon: "file-hdfs-o",
			familyId: "ZmlsZWlvI0ZpbGVJTw",
			cloudAgentId: "377ea2cf-0c86-4426-9035-05da60e7261f"
		},
		owner: "5f3e02d4-441a-49d4-be02-d4441a79d476",
		creator: "Jane Doe",
		rating: { global: 0.439999998, contributors: 1 },
		certification: "none",
		sharing: { isOwner: true, isSharedWithOthers: false },
		favorite: false,
		talendGlobalQuality: { "0": 305, "1": 7717, "-1": 18, total: 8040 }
	}
]
