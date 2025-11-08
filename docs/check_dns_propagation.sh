#!/bin/bash
# Simple script to monitor DNS propagation for knjigovodstvobonuss.hr
# Checks every 5 minutes using Google DNS (8.8.8.8)

DOMAIN="knjigovodstvobonuss.hr"
EXPECTED_NS=("dns1.p06.nsone.net." "dns2.p06.nsone.net." "dns3.p06.nsone.net." "dns4.p06.nsone.net.")

while true; do
	clear
	echo "⏱ Checking DNS propagation for $DOMAIN..."
	RESULT=$(dig +short "$DOMAIN" NS @8.8.8.8 | sort)
	echo "$RESULT"
	echo "Checked at: $(date '+%Y-%m-%d %H:%M:%S')"
	echo

	MATCH_COUNT=0
	for ns in "${EXPECTED_NS[@]}"; do
		if echo "$RESULT" | grep -q "$ns"; then
			((MATCH_COUNT++))
		fi
	done

	if [ "$MATCH_COUNT" -eq "${#EXPECTED_NS[@]}" ]; then
		echo -e "\033[1;32m✅ All nameservers have propagated! Your domain is fully live on Vercel.\033[0m"
		break
	else
		echo -e "\033[1;31m❌ Not fully propagated yet. Checking again in 5 minutes...\033[0m"
		sleep 300
	fi
done