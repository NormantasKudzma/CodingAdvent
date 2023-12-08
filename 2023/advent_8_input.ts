const sequence = "LLRLRRRLRRRLRRLLRRRLLRRLLRLRLRRRLRRRLLRRRLLRRRLRRLRRLRLRRLLRRRLRRRLLRRRLRRLLLRRLRLLLRLRRRLRLRLLLRRLRRLLLRRRLLRRRLRLRLLRRLRLRRRLRLRLLRLRRLRRRLRRLRLRRRLRLRRLRRLRLRRLLRLRLRRLRLLRRLRRLRLRRLLRLRLLRRLLRLLLRRLRLRRRLRRRLRRRLRLRLRRRLLLRLRRLRLRRRLRRRLRRRLRLRRRLRRRLRRRLRRRR"

const tree = {
	"GLR" : ["SPQ", "LKJ"],
	"LDM" : ["LXK", "RMT"],
	"NTJ" : ["NGP", "PKQ"],
	"PXL" : ["GQG", "CCL"],
	"TMB" : ["SSN", "LVM"],
	"XNP" : ["SXR", "XJH"],
	"SSG" : ["VJT", "BPK"],
	"XVS" : ["GHQ", "LCJ"],
	"HRM" : ["GNJ", "GNJ"],
	"NNG" : ["GCB", "FXT"],
	"VLL" : ["NTJ", "LFV"],
	"SXX" : ["SFQ", "TQR"],
	"XNM" : ["JCQ", "MNT"],
	"XTR" : ["JGP", "GPS"],
	"LXN" : ["DKT", "GBC"],
	"HGN" : ["GPH", "GFD"],
	"JJF" : ["DSH", "DVT"],
	"BTJ" : ["SDH", "CLJ"],
	"DPV" : ["RSQ", "XGJ"],
	"MMK" : ["CXD", "KNV"],
	"FXT" : ["LDV", "VBP"],
	"HDL" : ["RVD", "JQG"],
	"GPX" : ["PFH", "XBR"],
	"FMJ" : ["LJF", "KPC"],
	"CRX" : ["XXN", "XNQ"],
	"TQN" : ["JJF", "SBZ"],
	"FGB" : ["JHR", "QGC"],
	"HFQ" : ["PJS", "FPN"],
	"BKS" : ["GCK", "TRC"],
	"VPS" : ["BRP", "BSL"],
	"JMV" : ["QQM", "JVV"],
	"LMF" : ["DQJ", "RQP"],
	"TDT" : ["KVD", "KNT"],
	"PFP" : ["SMV", "NXN"],
	"DKT" : ["NCT", "MPG"],
	"NGP" : ["LMP", "LBG"],
	"BPD" : ["HRM", "HRM"],
	"CFK" : ["HDM", "JSV"],
	"CLB" : ["PXL", "CVB"],
	"GHG" : ["XVM", "BGM"],
	"GCB" : ["LDV", "VBP"],
	"NSH" : ["SHX", "JTQ"],
	"GGR" : ["STX", "HHQ"],
	"VTX" : ["XSM", "TNV"],
	"JGB" : ["QTG", "TBL"],
	"RDJ" : ["QQQ", "NGC"],
	"KVL" : ["MBG", "CDD"],
	"LVM" : ["KLR", "KVT"],
	"FRV" : ["XRD", "CGJ"],
	"VMJ" : ["DDG", "GQC"],
	"FDA" : ["BKF", "MQC"],
	"DSC" : ["QRC", "FMJ"],
	"CRQ" : ["GKT", "RMR"],
	"QLC" : ["HHT", "HLQ"],
	"FSN" : ["LHJ", "XTT"],
	"RDP" : ["CNJ", "SQD"],
	"XRJ" : ["MCV", "MVT"],
	"KJD" : ["JRX", "JCM"],
	"PXJ" : ["JGH", "CMB"],
	"FCQ" : ["XKQ", "MFB"],
	"FXK" : ["MSB", "TVD"],
	"JNF" : ["TQR", "SFQ"],
	"CJJ" : ["PXJ", "QQJ"],
	"KNV" : ["FTH", "RFL"],
	"HFH" : ["CBP", "DPN"],
	"LHT" : ["PGK", "DLD"],
	"GLC" : ["DTJ", "BDD"],
	"PNH" : ["SSG", "QGT"],
	"PJS" : ["FHQ", "GBD"],
	"NQJ" : ["XSD", "KKD"],
	"XVL" : ["PGN", "KSB"],
	"FMM" : ["CKQ", "FVF"],
	"NFL" : ["BPV", "HGF"],
	"PJR" : ["SNT", "HBM"],
	"JQG" : ["XNM", "QKN"],
	"NGQ" : ["NMV", "NBS"],
	"CQV" : ["MXC", "DQR"],
	"HQJ" : ["GGR", "VCX"],
	"TTQ" : ["HLJ", "MVF"],
	"HNR" : ["JGP", "GPS"],
	"LRK" : ["NFL", "LGC"],
	"GML" : ["TSF", "HFT"],
	"NLV" : ["JQS", "HHF"],
	"VGR" : ["VQT", "DRX"],
	"TQR" : ["SXH", "QJP"],
	"HPC" : ["PTF", "RRH"],
	"KCN" : ["PQP", "VBQ"],
	"HTF" : ["VGR", "TTS"],
	"QKH" : ["DCP", "KNL"],
	"HHH" : ["PJR", "RSP"],
	"QMD" : ["FNP", "CCG"],
	"LGV" : ["LTB", "JST"],
	"KQX" : ["SPF", "MLD"],
	"PJX" : ["MMP", "RHG"],
	"QRD" : ["GDL", "BBQ"],
	"CCG" : ["PVB", "GBB"],
	"CPG" : ["KSD", "BXG"],
	"PFV" : ["PMX", "RHS"],
	"VCC" : ["RPQ", "RDD"],
	"CVF" : ["XSM", "TNV"],
	"QQX" : ["HGN", "GDF"],
	"QVJ" : ["HXJ", "GTV"],
	"PSD" : ["CQD", "QFD"],
	"DLP" : ["QQX", "SQR"],
	"HBM" : ["MCR", "XVP"],
	"SFS" : ["BTS", "TSC"],
	"NKN" : ["GBQ", "RSF"],
	"VQT" : ["BTJ", "FGM"],
	"XBH" : ["RMT", "LXK"],
	"SRM" : ["PGK", "DLD"],
	"FKQ" : ["SRV", "PCC"],
	"LSX" : ["XVS", "HMG"],
	"CLL" : ["NXN", "SMV"],
	"GDD" : ["NLD", "TGL"],
	"RVD" : ["XNM", "QKN"],
	"RHG" : ["BJM", "NBR"],
	"KFX" : ["FMJ", "QRC"],
	"FGM" : ["CLJ", "SDH"],
	"XJJ" : ["CVF", "VTX"],
	"NHL" : ["XBJ", "HLF"],
	"VMS" : ["VVQ", "PPC"],
	"JCQ" : ["CFP", "FGB"],
	"PSP" : ["VTH", "HDC"],
	"LRQ" : ["GDG", "VBL"],
	"PKL" : ["SSG", "QGT"],
	"LHJ" : ["HML", "JMG"],
	"BDX" : ["FMK", "XDS"],
	"DPX" : ["BBF", "SBK"],
	"GFD" : ["XVV", "CHS"],
	"PSR" : ["FPP", "DSL"],
	"HQB" : ["MRL", "DHG"],
	"GKD" : ["SSP", "JSP"],
	"TKL" : ["KBV", "GTH"],
	"HMF" : ["HHT", "HLQ"],
	"DGS" : ["VDJ", "TJN"],
	"MRQ" : ["QVM", "KJC"],
	"XSD" : ["TGJ", "BDS"],
	"GDG" : ["RGS", "HFH"],
	"JSV" : ["MFD", "HXP"],
	"HMG" : ["LCJ", "GHQ"],
	"BPV" : ["MRQ", "XRL"],
	"SSP" : ["KQM", "NSX"],
	"SDH" : ["QQR", "RGR"],
	"JTX" : ["NHL", "TST"],
	"NBR" : ["BXP", "LSX"],
	"PCN" : ["JGR", "PQQ"],
	"QCR" : ["RQV", "FRV"],
	"NPH" : ["HHH", "MXN"],
	"CBS" : ["PMX", "RHS"],
	"JNR" : ["HKQ", "XHG"],
	"GKT" : ["HRC", "KHL"],
	"CDX" : ["NXJ", "FVH"],
	"MXN" : ["RSP", "PJR"],
	"ZZZ" : ["VBQ", "PQP"],
	"MSD" : ["VVQ", "PPC"],
	"SMV" : ["VKQ", "JNR"],
	"KKJ" : ["PGN", "KSB"],
	"RJC" : ["CNM", "LGB"],
	"QFB" : ["QQS", "TMC"],
	"STX" : ["KMP", "KMP"],
	"QQR" : ["XTR", "HNR"],
	"BPA" : ["DSH", "DVT"],
	"GDT" : ["XVD", "DNS"],
	"KXM" : ["CNJ", "SQD"],
	"CHL" : ["LBP", "PJX"],
	"XQX" : ["CMN", "QXH"],
	"GQG" : ["BKS", "VPQ"],
	"HRC" : ["VCR", "NPH"],
	"LSL" : ["FMM", "JTP"],
	"DDQ" : ["XPS", "DMJ"],
	"DMF" : ["DHG", "MRL"],
	"HBP" : ["KQX", "CDN"],
	"DSR" : ["QMD", "PBN"],
	"SJD" : ["VGP", "KSG"],
	"PQQ" : ["KKJ", "XVL"],
	"XQG" : ["LQK", "GXD"],
	"QGT" : ["VJT", "BPK"],
	"KDF" : ["LHG", "LHG"],
	"VQV" : ["CGG", "HVC"],
	"VJT" : ["XKS", "CLB"],
	"TBL" : ["JSG", "XDL"],
	"TCC" : ["DVX", "KMN"],
	"SHP" : ["QRD", "HDF"],
	"CRD" : ["FXQ", "TVC"],
	"TQP" : ["FQN", "BNF"],
	"JVV" : ["VMJ", "VJS"],
	"LKJ" : ["KNP", "GHG"],
	"DTR" : ["KHX", "GQK"],
	"FXR" : ["GDT", "GLK"],
	"DLD" : ["LBV", "TMB"],
	"PNV" : ["BMP", "LLQ"],
	"TMC" : ["FQV", "PPS"],
	"VCR" : ["MXN", "HHH"],
	"QSR" : ["DCP", "KNL"],
	"NVT" : ["GNR", "FKQ"],
	"JHM" : ["NLH", "KQR"],
	"LBG" : ["TCC", "RRN"],
	"PBK" : ["XBM", "RJL"],
	"CGD" : ["PQQ", "JGR"],
	"LHG" : ["JJF", "JJF"],
	"FMD" : ["LGC", "NFL"],
	"XJH" : ["LMF", "SMX"],
	"CNM" : ["VBN", "LGV"],
	"PPS" : ["NLV", "VJR"],
	"GNN" : ["VQV", "PLF"],
	"DXD" : ["SXR", "XJH"],
	"VPQ" : ["GCK", "TRC"],
	"KSB" : ["FSX", "RJC"],
	"CQH" : ["VCC", "RGM"],
	"DQV" : ["CBM", "JGF"],
	"JPG" : ["MMQ", "DLP"],
	"PNT" : ["BMB", "TCS"],
	"MVF" : ["MNN", "DFP"],
	"XVD" : ["PVR", "CFK"],
	"DQR" : ["MBF", "FCQ"],
	"HLF" : ["GGF", "JPG"],
	"CFJ" : ["DPX", "MHN"],
	"MDF" : ["LRK", "FMD"],
	"GQT" : ["JTL", "QRJ"],
	"KKR" : ["CJG", "LST"],
	"BKF" : ["HDL", "GCP"],
	"HGF" : ["XRL", "MRQ"],
	"MCR" : ["CRR", "BLQ"],
	"GVD" : ["BKF", "MQC"],
	"JSG" : ["QRG", "BCL"],
	"RQK" : ["XNQ", "XXN"],
	"NXF" : ["NGQ", "JSQ"],
	"RDD" : ["XNR", "LVG"],
	"QJP" : ["GRS", "QKX"],
	"RCL" : ["MDC", "FJM"],
	"LXK" : ["CVG", "BDX"],
	"KNP" : ["XVM", "BGM"],
	"MPG" : ["NBF", "KRK"],
	"CCL" : ["VPQ", "BKS"],
	"SSN" : ["KVT", "KLR"],
	"QRK" : ["FKH", "VFD"],
	"QQS" : ["PPS", "FQV"],
	"CHS" : ["NJX", "QRK"],
	"PVL" : ["JRX", "JCM"],
	"KNF" : ["HXJ", "GTV"],
	"FKH" : ["CSV", "JHP"],
	"XDK" : ["XQX", "VHT"],
	"JKR" : ["MDR", "NKN"],
	"DMJ" : ["KQL", "BRM"],
	"KBV" : ["DSC", "KFX"],
	"BRM" : ["BPD", "NCB"],
	"SNT" : ["MCR", "XVP"],
	"CFP" : ["JHR", "QGC"],
	"TJF" : ["SRH", "SLM"],
	"LMP" : ["TCC", "RRN"],
	"CDM" : ["CVF", "VTX"],
	"GQK" : ["NVT", "TSJ"],
	"RGM" : ["RPQ", "RDD"],
	"BLF" : ["HDC", "VTH"],
	"PGS" : ["JRH", "DPV"],
	"LCX" : ["QCD", "XQG"],
	"GKM" : ["GLB", "CJJ"],
	"GFB" : ["QCF", "VNT"],
	"VQM" : ["PJP", "PJP"],
	"HKH" : ["SHP", "GCC"],
	"STG" : ["GNN", "VPZ"],
	"SBF" : ["KCN", "ZZZ"],
	"KRK" : ["TTQ", "CGX"],
	"VRF" : ["GLC", "NXP"],
	"JFP" : ["QHG", "RDJ"],
	"HDC" : ["SML", "HPC"],
	"TPB" : ["GNJ", "SBF"],
	"DDG" : ["DLT", "KBM"],
	"QTM" : ["KDL", "DVR"],
	"SJG" : ["NXJ", "FVH"],
	"RTT" : ["QCF", "VNT"],
	"GTV" : ["DMX", "GFN"],
	"SBK" : ["DJD", "VFS"],
	"XVP" : ["BLQ", "CRR"],
	"LXP" : ["TQP", "BBX"],
	"CMB" : ["PVL", "KJD"],
	"VHT" : ["QXH", "CMN"],
	"SMR" : ["LST", "CJG"],
	"BXG" : ["XBF", "XFD"],
	"GXD" : ["NPV", "HBP"],
	"BVA" : ["SMR", "KKR"],
	"XRD" : ["SQN", "MVX"],
	"CNJ" : ["BMK", "RPT"],
	"QFR" : ["LRK", "FMD"],
	"FPP" : ["NCR", "VPS"],
	"NQN" : ["LBP", "PJX"],
	"PLF" : ["CGG", "HVC"],
	"TPK" : ["VQM", "VQM"],
	"MKK" : ["MTJ", "PSD"],
	"PFB" : ["MXP", "LGF"],
	"VDJ" : ["LSL", "QVX"],
	"FVH" : ["JXQ", "PBK"],
	"HDM" : ["HXP", "MFD"],
	"VJS" : ["DDG", "GQC"],
	"PHC" : ["KDF", "TCB"],
	"VFD" : ["CSV", "JHP"],
	"RRH" : ["GDD", "XDM"],
	"MRL" : ["GML", "DLB"],
	"CDD" : ["JDK", "KJQ"],
	"XPS" : ["KQL", "BRM"],
	"NXH" : ["JMV", "PVK"],
	"NJX" : ["FKH", "VFD"],
	"FQL" : ["DSL", "FPP"],
	"LST" : ["QDF", "JDR"],
	"PQP" : ["LHT", "SRM"],
	"LPS" : ["PTK", "PHC"],
	"CVT" : ["CXD", "KNV"],
	"QTG" : ["XDL", "JSG"],
	"FXQ" : ["FGC", "QBT"],
	"TRK" : ["SSQ", "LPX"],
	"PTK" : ["KDF", "KDF"],
	"BXP" : ["HMG", "XVS"],
	"GCK" : ["QVJ", "KNF"],
	"MSB" : ["QKR", "NQJ"],
	"SVN" : ["DPV", "JRH"],
	"CQD" : ["PST", "DQV"],
	"QBQ" : ["TNG", "PNT"],
	"HJZ" : ["MQC", "BKF"],
	"HPT" : ["GDG", "VBL"],
	"TJN" : ["QVX", "LSL"],
	"NDA" : ["VQV", "PLF"],
	"JHP" : ["XRJ", "VKF"],
	"QTP" : ["XTT", "LHJ"],
	"JTL" : ["GVD", "GVD"],
	"DDV" : ["NDJ", "NVK"],
	"SCF" : ["VCC", "RGM"],
	"RGL" : ["NSH", "TMK"],
	"KSD" : ["XBF", "XFD"],
	"RJL" : ["TPK", "BVS"],
	"QKX" : ["NPC", "PPG"],
	"XMR" : ["TBL", "QTG"],
	"CVG" : ["FMK", "XDS"],
	"SKS" : ["SVQ", "THL"],
	"CCM" : ["MXP", "LGF"],
	"TNG" : ["TCS", "BMB"],
	"XXN" : ["GLR", "QQK"],
	"NVK" : ["VRF", "PMC"],
	"RRN" : ["DVX", "KMN"],
	"NPC" : ["LJH", "LJH"],
	"JJL" : ["XBH", "LDM"],
	"LDV" : ["FXK", "DMP"],
	"KMP" : ["JTL", "JTL"],
	"QNQ" : ["RMR", "GKT"],
	"JXQ" : ["XBM", "RJL"],
	"CBP" : ["NQN", "CHL"],
	"PPG" : ["LJH", "XTG"],
	"LQK" : ["HBP", "NPV"],
	"XTT" : ["HML", "JMG"],
	"SVQ" : ["PKL", "PNH"],
	"DSL" : ["NCR", "VPS"],
	"LTB" : ["FKX", "DTR"],
	"NLH" : ["GFB", "RTT"],
	"QFD" : ["PST", "DQV"],
	"RHS" : ["SNV", "HPJ"],
	"JPT" : ["GCS", "VGX"],
	"VTH" : ["HPC", "SML"],
	"JRF" : ["LNR", "HSF"],
	"BPK" : ["CLB", "XKS"],
	"LHH" : ["RDP", "KXM"],
	"TKP" : ["DQF", "CXL"],
	"XVV" : ["NJX", "QRK"],
	"GBD" : ["MBC", "QBQ"],
	"PBP" : ["DDV", "THT"],
	"TNF" : ["KNT", "KVD"],
	"RFL" : ["VMX", "DBF"],
	"MBC" : ["TNG", "PNT"],
	"MCV" : ["VDS", "PBP"],
	"GNR" : ["PCC", "SRV"],
	"DHG" : ["GML", "DLB"],
	"TCV" : ["LDF", "TKL"],
	"XDS" : ["PSR", "FQL"],
	"VMR" : ["TST", "NHL"],
	"XVM" : ["RGK", "QFB"],
	"LJN" : ["MXC", "DQR"],
	"VBL" : ["HFH", "RGS"],
	"LCG" : ["PFV", "CBS"],
	"SXR" : ["LMF", "SMX"],
	"TGL" : ["VMR", "JTX"],
	"BDS" : ["QKH", "QSR"],
	"RGS" : ["CBP", "DPN"],
	"RFZ" : ["KKR", "SMR"],
	"JTQ" : ["DSR", "BQJ"],
	"BQJ" : ["QMD", "PBN"],
	"VVQ" : ["DGS", "GSN"],
	"CGG" : ["NNL", "LCR"],
	"CVH" : ["LPX", "SSQ"],
	"NGC" : ["GKM", "TTN"],
	"XNR" : ["XNP", "DXD"],
	"FBN" : ["DQF", "CXL"],
	"MBG" : ["KJQ", "JDK"],
	"JSQ" : ["NMV", "NBS"],
	"LRF" : ["VJM", "MQQ"],
	"GBC" : ["NCT", "MPG"],
	"NXP" : ["BDD", "DTJ"],
	"LGC" : ["BPV", "HGF"],
	"HDF" : ["BBQ", "GDL"],
	"RSF" : ["JPT", "SCP"],
	"LDF" : ["KBV", "GTH"],
	"QQJ" : ["CMB", "JGH"],
	"SHX" : ["DSR", "BQJ"],
	"RSP" : ["SNT", "HBM"],
	"GPH" : ["CHS", "XVV"],
	"DQJ" : ["QNQ", "CRQ"],
	"MMQ" : ["SQR", "QQX"],
	"FVF" : ["PCN", "CGD"],
	"BBF" : ["VFS", "DJD"],
	"QBT" : ["HFQ", "PGM"],
	"RPQ" : ["XNR", "LVG"],
	"CJG" : ["QDF", "JDR"],
	"SBR" : ["MSD", "VMS"],
	"SXH" : ["GRS", "QKX"],
	"MFB" : ["JTF", "QTM"],
	"DBL" : ["XBR", "PFH"],
	"TGJ" : ["QSR", "QKH"],
	"CXL" : ["KMK", "RVR"],
	"PGM" : ["FPN", "PJS"],
	"NMR" : ["HXM", "TJF"],
	"QGC" : ["STV", "NJT"],
	"VMX" : ["GTG", "QCR"],
	"DSH" : ["CRX", "RQK"],
	"PST" : ["CBM", "JGF"],
	"JVR" : ["PVK", "JMV"],
	"GRS" : ["NPC", "NPC"],
	"RBT" : ["MHN", "DPX"],
	"XBF" : ["XQL", "BVB"],
	"DJD" : ["CFF", "JJL"],
	"GLB" : ["PXJ", "QQJ"],
	"MQC" : ["HDL", "GCP"],
	"SHC" : ["BKK", "STG"],
	"JGH" : ["PVL", "KJD"],
	"XHG" : ["VVS", "HTD"],
	"SPF" : ["XMR", "JGB"],
	"GHV" : ["BLF", "PSP"],
	"VGN" : ["KSG", "VGP"],
	"FQV" : ["NLV", "VJR"],
	"HHR" : ["LJN", "CQV"],
	"GFN" : ["FHL", "SHC"],
	"KJQ" : ["NXH", "JVR"],
	"CFF" : ["XBH", "LDM"],
	"SFQ" : ["SXH", "QJP"],
	"XBR" : ["CQH", "SCF"],
	"XND" : ["DMJ", "XPS"],
	"LDQ" : ["BXG", "KSD"],
	"CMN" : ["PFP", "CLL"],
	"GCC" : ["HDF", "QRD"],
	"HPJ" : ["PMP", "FRM"],
	"BSS" : ["MKK", "TVJ"],
	"VTC" : ["DKR", "MXS"],
	"VCX" : ["STX", "HHQ"],
	"RQV" : ["XRD", "CGJ"],
	"PGK" : ["TMB", "LBV"],
	"HTD" : ["LRF", "KXL"],
	"PVR" : ["JSV", "HDM"],
	"BBQ" : ["XKC", "HHR"],
	"PKQ" : ["LBG", "LMP"],
	"NCN" : ["GGR", "VCX"],
	"PBN" : ["FNP", "CCG"],
	"SQD" : ["BMK", "RPT"],
	"QKR" : ["KKD", "XSD"],
	"DTJ" : ["DGX", "LPB"],
	"TSJ" : ["GNR", "FKQ"],
	"TVC" : ["FGC", "QBT"],
	"NCC" : ["RGL", "KGL"],
	"DVT" : ["CRX", "RQK"],
	"THL" : ["PKL", "PNH"],
	"QQM" : ["VMJ", "VJS"],
	"DKR" : ["NCN", "HQJ"],
	"MKF" : ["VLR", "LQS"],
	"VFS" : ["CFF", "JJL"],
	"GDF" : ["GFD", "GPH"],
	"DQF" : ["RVR", "KMK"],
	"NSX" : ["KLV", "CLQ"],
	"JGF" : ["TCV", "QDH"],
	"XKS" : ["PXL", "CVB"],
	"RSQ" : ["HQB", "DMF"],
	"DXX" : ["LFV", "NTJ"],
	"VKF" : ["MCV", "MVT"],
	"BDD" : ["DGX", "LPB"],
	"DNS" : ["PVR", "CFK"],
	"SRV" : ["RQC", "JHM"],
	"XDL" : ["QRG", "BCL"],
	"NCT" : ["KRK", "NBF"],
	"XQK" : ["THL", "SVQ"],
	"DLB" : ["HFT", "TSF"],
	"DVX" : ["CJF", "NSJ"],
	"NCR" : ["BSL", "BRP"],
	"CSV" : ["XRJ", "VKF"],
	"KLS" : ["TTS", "VGR"],
	"JCB" : ["BLM", "TQL"],
	"MXP" : ["NNG", "XXS"],
	"FNP" : ["PVB", "GBB"],
	"XGS" : ["GLK", "GDT"],
	"VBQ" : ["SRM", "LHT"],
	"GHQ" : ["SJG", "CDX"],
	"LQS" : ["JKR", "XDX"],
	"MXS" : ["HQJ", "NCN"],
	"MNN" : ["TKP", "FBN"],
	"DVR" : ["CVH", "TRK"],
	"VKQ" : ["HKQ", "XHG"],
	"KHX" : ["TSJ", "NVT"],
	"BMK" : ["SKB", "JCB"],
	"FGC" : ["HFQ", "PGM"],
	"TVD" : ["QKR", "NQJ"],
	"BNF" : ["CFJ", "RBT"],
	"NXN" : ["VKQ", "JNR"],
	"VJM" : ["CCS", "KVL"],
	"XRL" : ["QVM", "KJC"],
	"SRH" : ["XJJ", "CDM"],
	"FDF" : ["JNF", "SXX"],
	"XKM" : ["FDV", "VTC"],
	"BLQ" : ["CDT", "CRD"],
	"VMF" : ["QLC", "HMF"],
	"JGP" : ["LPS", "JNC"],
	"BVB" : ["HPT", "LRQ"],
	"LNR" : ["QFR", "MDF"],
	"VJR" : ["HHF", "JQS"],
	"FHQ" : ["MBC", "QBQ"],
	"SLM" : ["XJJ", "CDM"],
	"HVC" : ["LCR", "NNL"],
	"KNT" : ["XKM", "VDF"],
	"KGL" : ["NSH", "TMK"],
	"KNL" : ["GKD", "SBM"],
	"CJF" : ["VGN", "SJD"],
	"HXJ" : ["DMX", "GFN"],
	"RGR" : ["XTR", "HNR"],
	"PMP" : ["XDK", "HLS"],
	"TKB" : ["BLF", "PSP"],
	"VBJ" : ["RGL", "KGL"],
	"LCJ" : ["CDX", "SJG"],
	"JCM" : ["HKH", "KDS"],
	"CXD" : ["FTH", "RFL"],
	"TSF" : ["CXS", "NXF"],
	"BSL" : ["CCM", "PFB"],
	"QRC" : ["KPC", "LJF"],
	"MLD" : ["JGB", "XMR"],
	"CRR" : ["CRD", "CDT"],
	"GNJ" : ["KCN", "KCN"],
	"QRJ" : ["GVD", "HJZ"],
	"CDN" : ["SPF", "MLD"],
	"HLS" : ["VHT", "XQX"],
	"HML" : ["SBR", "FMH"],
	"RPT" : ["JCB", "SKB"],
	"SBM" : ["SSP", "JSP"],
	"VBN" : ["LTB", "JST"],
	"NBS" : ["FDF", "MSG"],
	"MDR" : ["GBQ", "RSF"],
	"XDM" : ["TGL", "NLD"],
	"SKB" : ["TQL", "BLM"],
	"NNL" : ["LXP", "QTD"],
	"KQM" : ["KLV", "CLQ"],
	"VLR" : ["JKR", "XDX"],
	"RSG" : ["LDQ", "CPG"],
	"LJH" : ["NMR", "NMR"],
	"RGK" : ["QQS", "TMC"],
	"SQN" : ["VVL", "JFP"],
	"DFP" : ["TKP", "FBN"],
	"SCP" : ["VGX", "GCS"],
	"VBP" : ["DMP", "FXK"],
	"NMV" : ["MSG", "FDF"],
	"QCF" : ["DXX", "VLL"],
	"HHT" : ["MKF", "GBN"],
	"SBZ" : ["DVT", "DSH"],
	"SNV" : ["PMP", "FRM"],
	"GQC" : ["KBM", "DLT"],
	"MQQ" : ["KVL", "CCS"],
	"VGP" : ["LXN", "MVD"],
	"GBN" : ["VLR", "LQS"],
	"MVX" : ["JFP", "VVL"],
	"DRX" : ["BTJ", "FGM"],
	"JRH" : ["XGJ", "RSQ"],
	"RVR" : ["TDT", "TNF"],
	"PVK" : ["QQM", "JVV"],
	"JQS" : ["XGS", "FXR"],
	"BCL" : ["RSG", "QSL"],
	"GBB" : ["MMK", "CVT"],
	"SSQ" : ["XND", "DDQ"],
	"PCC" : ["JHM", "RQC"],
	"CCS" : ["CDD", "MBG"],
	"MMP" : ["NBR", "BJM"],
	"MTJ" : ["QFD", "CQD"],
	"PVB" : ["CVT", "MMK"],
	"KLR" : ["TND", "VMF"],
	"FKX" : ["KHX", "GQK"],
	"FDV" : ["DKR", "MXS"],
	"TCB" : ["LHG", "TQN"],
	"JDK" : ["NXH", "JVR"],
	"GBQ" : ["SCP", "JPT"],
	"TTN" : ["GLB", "CJJ"],
	"JTF" : ["DVR", "KDL"],
	"QQQ" : ["TTN", "GKM"],
	"DXP" : ["LHH", "CSF"],
	"MFD" : ["BSS", "PQJ"],
	"PGN" : ["RJC", "FSX"],
	"MBF" : ["XKQ", "MFB"],
	"XXS" : ["FXT", "GCB"],
	"VGX" : ["VBJ", "NCC"],
	"FPJ" : ["PJP", "RFZ"],
	"XTG" : ["NMR", "PQZ"],
	"JGR" : ["XVL", "KKJ"],
	"MSG" : ["JNF", "SXX"],
	"CKQ" : ["PCN", "CGD"],
	"QSL" : ["LDQ", "CPG"],
	"XQL" : ["HPT", "LRQ"],
	"KVT" : ["TND", "VMF"],
	"BBX" : ["BNF", "FQN"],
	"CLJ" : ["QQR", "RGR"],
	"GSN" : ["VDJ", "TJN"],
	"DLT" : ["SXP", "SFS"],
	"XFD" : ["BVB", "XQL"],
	"FHL" : ["BKK", "BKK"],
	"FSX" : ["LGB", "CNM"],
	"SPQ" : ["KNP", "GHG"],
	"NXJ" : ["JXQ", "PBK"],
	"NPV" : ["CDN", "KQX"],
	"DPN" : ["CHL", "NQN"],
	"RMR" : ["HRC", "KHL"],
	"LPF" : ["XQG", "QCD"],
	"THT" : ["NDJ", "NVK"],
	"JNC" : ["PTK", "PHC"],
	"LGF" : ["XXS", "NNG"],
	"CVB" : ["CCL", "GQG"],
	"VVL" : ["RDJ", "QHG"],
	"LCR" : ["LXP", "QTD"],
	"PQJ" : ["TVJ", "MKK"],
	"VDF" : ["FDV", "VTC"],
	"GTG" : ["FRV", "RQV"],
	"FRM" : ["XDK", "HLS"],
	"LPB" : ["SPV", "PNV"],
	"NBF" : ["TTQ", "CGX"],
	"XKQ" : ["QTM", "JTF"],
	"BRP" : ["PFB", "CCM"],
	"KVD" : ["XKM", "VDF"],
	"XBJ" : ["GGF", "JPG"],
	"KDS" : ["GCC", "SHP"],
	"TVJ" : ["PSD", "MTJ"],
	"XSM" : ["NLJ", "JRF"],
	"BTS" : ["SKS", "XQK"],
	"VVS" : ["LRF", "KXL"],
	"SPV" : ["BMP", "LLQ"],
	"KQL" : ["BPD", "NCB"],
	"CGX" : ["MVF", "HLJ"],
	"XBM" : ["TPK", "TPK"],
	"TMK" : ["JTQ", "SHX"],
	"VNT" : ["DXX", "VLL"],
	"CBM" : ["QDH", "TCV"],
	"TQL" : ["QTP", "FSN"],
	"HKQ" : ["VVS", "HTD"],
	"RQC" : ["KQR", "NLH"],
	"FMH" : ["VMS", "MSD"],
	"NCB" : ["HRM", "TPB"],
	"BKK" : ["GNN", "GNN"],
	"QRG" : ["QSL", "RSG"],
	"JSP" : ["NSX", "KQM"],
	"RQP" : ["CRQ", "QNQ"],
	"JHR" : ["NJT", "STV"],
	"MXC" : ["MBF", "FCQ"],
	"LBV" : ["LVM", "SSN"],
	"KLV" : ["KFG", "RCL"],
	"FJM" : ["TXK", "LCG"],
	"QVX" : ["FMM", "JTP"],
	"LJF" : ["KLS", "HTF"],
	"QXH" : ["PFP", "CLL"],
	"KQR" : ["GFB", "RTT"],
	"MHN" : ["SBK", "BBF"],
	"GTH" : ["KFX", "DSC"],
	"GCP" : ["RVD", "JQG"],
	"CXS" : ["NGQ", "JSQ"],
	"BJM" : ["BXP", "LSX"],
	"LLQ" : ["NRD", "FSK"],
	"CSF" : ["RDP", "KXM"],
	"TXK" : ["CBS", "PFV"],
	"SXP" : ["TSC", "BTS"],
	"PQZ" : ["TJF", "HXM"],
	"KBM" : ["SXP", "SFS"],
	"HHF" : ["FXR", "XGS"],
	"TNV" : ["NLJ", "JRF"],
	"JST" : ["DTR", "FKX"],
	"XKC" : ["LJN", "CQV"],
	"TCS" : ["SVN", "PGS"],
	"PPC" : ["DGS", "GSN"],
	"LGB" : ["LGV", "VBN"],
	"MVT" : ["VDS", "PBP"],
	"TST" : ["XBJ", "HLF"],
	"QVM" : ["GPX", "DBL"],
	"NSJ" : ["SJD", "VGN"],
	"PFH" : ["SCF", "CQH"],
	"JTP" : ["FVF", "CKQ"],
	"QDF" : ["GHV", "TKB"],
	"TTS" : ["DRX", "VQT"],
	"CDT" : ["FXQ", "TVC"],
	"DCP" : ["SBM", "GKD"],
	"VPZ" : ["PLF", "VQV"],
	"NLD" : ["JTX", "VMR"],
	"HFT" : ["CXS", "NXF"],
	"GCS" : ["VBJ", "NCC"],
	"HHQ" : ["KMP", "GQT"],
	"RMT" : ["BDX", "CVG"],
	"TRC" : ["QVJ", "KNF"],
	"LPX" : ["DDQ", "XND"],
	"SQR" : ["HGN", "GDF"],
	"KFG" : ["MDC", "FJM"],
	"BGM" : ["RGK", "QFB"],
	"KKD" : ["TGJ", "BDS"],
	"LFV" : ["PKQ", "NGP"],
	"GPS" : ["LPS", "JNC"],
	"CGJ" : ["MVX", "SQN"],
	"DGX" : ["SPV", "PNV"],
	"KMK" : ["TDT", "TNF"],
	"BVS" : ["VQM", "FPJ"],
	"MDC" : ["TXK", "LCG"],
	"KMN" : ["CJF", "NSJ"],
	"QHG" : ["QQQ", "NGC"],
	"KXL" : ["VJM", "MQQ"],
	"BMB" : ["SVN", "PGS"],
	"NLJ" : ["LNR", "HSF"],
	"TSC" : ["XQK", "SKS"],
	"JRX" : ["KDS", "HKH"],
	"TND" : ["QLC", "HMF"],
	"QCD" : ["LQK", "GXD"],
	"NRD" : ["LCX", "LPF"],
	"HXP" : ["PQJ", "BSS"],
	"HLJ" : ["MNN", "DFP"],
	"MNT" : ["CFP", "FGB"],
	"KSG" : ["MVD", "LXN"],
	"FPN" : ["FHQ", "GBD"],
	"HXM" : ["SRH", "SLM"],
	"CLQ" : ["KFG", "RCL"],
	"XGJ" : ["DMF", "HQB"],
	"FSK" : ["LPF", "LCX"],
	"GDL" : ["HHR", "XKC"],
	"PTF" : ["XDM", "GDD"],
	"AAA" : ["PQP", "VBQ"],
	"XDX" : ["MDR", "NKN"],
	"SMX" : ["RQP", "DQJ"],
	"LBP" : ["RHG", "MMP"],
	"FQN" : ["RBT", "CFJ"],
	"KDL" : ["CVH", "TRK"],
	"QCA" : ["HXM", "TJF"],
	"MVD" : ["GBC", "DKT"],
	"FMK" : ["FQL", "PSR"],
	"PMX" : ["SNV", "HPJ"],
	"GLK" : ["XVD", "DNS"],
	"NJT" : ["DXP", "XHQ"],
	"SML" : ["RRH", "PTF"],
	"BMP" : ["NRD", "FSK"],
	"QKN" : ["MNT", "JCQ"],
	"QQK" : ["SPQ", "LKJ"],
	"JDR" : ["GHV", "TKB"],
	"DMX" : ["FHL", "FHL"],
	"PMC" : ["NXP", "GLC"],
	"HSF" : ["QFR", "MDF"],
	"NDJ" : ["PMC", "VRF"],
	"JMG" : ["SBR", "FMH"],
	"KHL" : ["NPH", "VCR"],
	"QTD" : ["BBX", "TQP"],
	"XHQ" : ["LHH", "CSF"],
	"GGF" : ["DLP", "MMQ"],
	"QDH" : ["TKL", "LDF"],
	"DMP" : ["MSB", "TVD"],
	"BLM" : ["QTP", "FSN"],
	"DBF" : ["QCR", "GTG"],
	"XNQ" : ["QQK", "GLR"],
	"HLQ" : ["MKF", "GBN"],
	"VDS" : ["DDV", "THT"],
	"LVG" : ["XNP", "DXD"],
	"STV" : ["XHQ", "DXP"],
	"KPC" : ["HTF", "KLS"],
	"FTH" : ["VMX", "DBF"],
	"KJC" : ["DBL", "GPX"],
	"PJP" : ["SMR", "KKR"],
}