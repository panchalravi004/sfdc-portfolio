const config = {
	header: {
		name: 'Ravi Panchal',
		menu: ['ABOUT','SKILLS','EXPERIENCE','PROJECTS','CERTIFICATES','EDUCATION']
	},
	detail: {
		name: 'Ravi Panchal',
		bio: 'Salesforce Developer',
		location: 'Gujarat, India',
		avatar_url: 'https://profile.digital.salesforce.com/images/p/0058W00000BEIEMQA5/1734358401/F'
	},
	github: {
		username: 'panchalravi004', // Your GitHub org/user name. (Required)
		sortBy: 'stars', // stars | updated
		limit: 10, // How many projects to display.
		exclude: {
			forks: false, // Forked projects will not be displayed if set to true.
			projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
		},
	},
	social: {
		github: 'panchalravi004',
		trailhead: 'ravi-panchal-sfdc',
		linkedin: 'ravi-panchal-sfdc',
		twitter: 'ravi_sfdc_24',
		website: 'https://www.superqbit.com',
		email: 'panchalravi018@gmail.com',
		location: 'Gujarat, India',
	},
	resume: 'https://docs.google.com/document/d/1b7hrWGT0XFhhfg3ZEHZ1lMDdTgpjMXgkFXvUPBO5fUA/edit',
	// Empty fileUrl will hide the `Download Resume` button.
	skills: [
		'Salesforce',
		'LWC',
		'Apex',
		'Visualforce',
		'SOQL',
		'Javascript',
		'Git',
	],
	// Remove experiences to hide section
	experiences: [
		{
			name: 'Salesforce Developer',
			title: 'Developer',
			from: 'July 2023',
			to: 'December 2024',
			link: 'https://kriit.com/',
			location: 'Gujarat, India',
			description: 'Worked as a Salesforce developer.'
		},
		{
			name: 'Trainee Salesforce Engineer',
			title: 'Trainee',
			from: 'January 2023',
			to: 'June 2023',
			link: 'https://www.kriit.com/',
			location: 'Gujarat, India',
			description: 'Joined as intern for training in salesforce.'
		},
	],
	// Remove certifications to hide section
	certifications: [
		// {
		// 	icon: 'https://drm.file.force.com/servlet/servlet.ImageServer?id=0153k00000A5MtX&oid=00DF0000000gZsu&lastMod=1617267315000',
		// 	title: 'Salesforce JavaScript Developer I',
		// 	year: 'December 2020',
		// 	link: 'https://trailhead.salesforce.com/credentials/javascriptdeveloperi'
		// },
		// {
		// 	icon: 'https://drm.file.force.com/servlet/servlet.ImageServer?id=0153k00000A5Mu6&oid=00DF0000000gZsu&lastMod=1617274648000',
		// 	title: 'Salesforce Certified Tableau CRM and Einstein Discovery Consultant',
		// 	year: 'June 2020',
		// 	link: 'https://trailhead.salesforce.com/credentials/tableaucrmandeinsteindiscoveryconsultant'
		// },
		// {
		// 	icon: 'https://drm.file.force.com/servlet/servlet.ImageServer?id=0153k00000A5Mu4&oid=00DF0000000gZsu&lastMod=1617275568000',
		// 	title: 'Salesforce Experience Cloud Consultant',
		// 	year: 'October 2019',
		// 	link: 'https://trailhead.salesforce.com/credentials/experiencecloudconsultant'
		// },
		// {
		// 	icon: 'https://drm.file.force.com/servlet/servlet.ImageServer?id=0153k00000A5Mtn&oid=00DF0000000gZsu&lastMod=1617268355000',
		// 	title: 'Salesforce Service Cloud Consultant',
		// 	year: 'October 2019',
		// 	link: 'https://trailhead.salesforce.com/credentials/servicecloudconsultant'
		// },
		// {
		// 	icon: 'https://drm.file.force.com/servlet/servlet.ImageServer?id=0153k00000A5Mth&oid=00DF0000000gZsu&lastMod=1617268556000',
		// 	title: 'Salesforce Platform Developer II',
		// 	year: 'April 2019',
		// 	link: 'https://trailhead.salesforce.com/credentials/platformdeveloperii'
		// },
		{
			icon: 'https://drm.file.force.com/servlet/servlet.ImageServer?id=0153k00000A5Mtz&oid=00DF0000000gZsu&lastMod=1617268528000',
			title: 'Salesforce Platform Developer I ',
			year: 'January 2025',
			link: 'https://trailhead.salesforce.com/credentials/platformdeveloperi'
		},
		// {
		// 	icon: 'https://drm.file.force.com/servlet/servlet.ImageServer?id=0153k00000A5Mtl&oid=00DF0000000gZsu&lastMod=1617268490000',
		// 	title: 'Salesforce Platform App Builder',
		// 	year: 'March 2018',
		// 	link: 'https://trailhead.salesforce.com/credentials/platformappbuilder'
		// },
		{
			icon: 'https://drm.file.force.com/servlet/servlet.ImageServer?id=0153k00000A5Mu5&oid=00DF0000000gZsu&lastMod=1617267801000',
			title: 'Salesforce Admin',
			year: 'February 2025',
			link: 'https://trailhead.salesforce.com/credentials/administrator'
		}
	],
	// Remove education to hide section
	education: [
		{
			name: 'Ganpat University',
			title: 'Masters in Computer Application',
			from: 'July 2021',
			to: 'April 2023',
			location: 'Gujarat, India'
		},
		{
			name: 'Hemchandracharya North Gujarat University',
			title: 'Bachelor in Commerce',
			from: 'July 2018',
			to: 'April 2021',
			location: 'Gujarat, India'
		},
	],
	// To hide the `My Projects` section, keep it empty.
	projects: [
		{
			title: 'StreamForce Conference Calling',
			description: 'Conference calling app using WebRTC on digital experience site.',
			imageUrl: './resources/images/project/streamforce-sfdc.png',
			link: '',
		},
		{
			title: 'Twillio Bulk Messaging',
			description: 'Using custom template send bulk message on specific record or using CSV file based on criteria.',
			imageUrl: './resources/images/project/twillio-sfdc.png',
			link: '',
		},
	],
	themeConfig: {
		defaultTheme: 'light', // default for stock theme
		light: {
			primary: '#eef4ff',
			primaryText: '#2b2826',
			baseText: '#2b2826',
			baseL1:'#fff',
		},
		aqua: {
			primary: '#fff',  
			primaryText: '#219aaf',    
			baseL1: '#78b0fd',
			baseL2: '#fc055b',
			highlight: 'rgb(27, 150, 255)',      
			baseText:'#fff',
			roundedbox: '4px',
			roundedbtn: '4px',
		},
		dark: {
			primary: '#282828',  
			primaryText: '#fff',    
			baseL1: '#141414',
			baseL2: '#080707',
			highlight: '#f3f2f2',      
			baseText:'#fff',
			roundedbox: '0px',
			roundedbtn: '0px',
		},
	},
	footer: 'Thank You For Your Time'
};

export { config };
