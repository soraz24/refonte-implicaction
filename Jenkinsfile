pipeline {
		agent any
		tools {
				maven "MAVEN"
				jdk "JDK"
		}
		stages {
				stage('docker-compose'){
						steps{
								sh 'pwd '
								sh 'ls '
								sh 'cat docker-compose.yml'
								sh 'docker-compose up -d'
						}
				}
				stage('Build') {
						steps {
								sh 'mvn -B -DskipTests clean package'
						}
				}
				stage('Test') { 
						steps {
								sh 'export TESTCONTAINERS_RYUK_DISABLED=true' 
								sh'mvn test -Dspring.profiles.active=test -Dtest=WorkExperienceAdapterTest -DfailIfNoTests=false'
						}
				}
				stage('Cypress e2e Tests') {
						steps {
								sh 'npm run cypress:ci''
						}
				}
				stage('Deliver') {
						steps {
								sh 'echo deliver'
						}
				}
		}
}
