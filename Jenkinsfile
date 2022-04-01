pipeline {
		agent any
		tools {
				maven "MAVEN"
				jdk "JDK"
		}
		stages {
				
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
						post {
							 always {
										junit 'target/surefire-reports/*.xml' 
							}
						}
				}
				
		}
}
